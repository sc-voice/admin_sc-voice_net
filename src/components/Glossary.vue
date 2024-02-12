<template>
  <v-row class="mt-5 glossary" >
    <v-card max-width="18em" style="border-right: 1pt solid grey">
      <v-card-text>
        <div class="text-h5">
          {{title}}
        </div>
        <v-list density="compact">
          <v-list-item v-for="item in filteredItems"
            @click="onClickItem(item)">
            <v-list-item-title>
              <v-icon :icon="itemIcon(item)" />
              {{item.title}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card max-width="40em">
      <v-card-text>
        <div class="glossary-title"> 
          {{curItem.title}}
          <a v-if="curItem.link" :href="curItem.link" target="_blank">
            <v-icon>mdi-open-in-new</v-icon>
          </a>
        </div>
        <div class="glossary-summary"> {{curItem.summary}}</div>
        <div v-if="curItem.github" >
          <a :href="`https://github.com/${curItem.github}`"
            target="_blank">
            <div class="github">
              <Github class="mr-2"/>
              <div>{{`https://github.com/${curItem.github}`}}</div>
            </div>
          </a>
        </div>
        <div class="glossary-text"> {{curItem.text}}</div>
        <div class="glossary-text" v-html="curItem.html" />
        <div v-if="curItem.library" class="library">
          <div>{{curItem.library}}</div>
        </div>
        <div v-if="curItem.monitor">
          <UrlMonitor title="System Status" :url="curItem.monitor" 
            :key="curItem.monitor"/>
        </div>
        <div v-if="curItem.issue" class="issue">
          <div v-html="curItem.issue_body.value"/>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script setup>
  import { Octokit } from "https://esm.sh/octokit";
  import { watch, computed, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useAppStore } from '../store/app.js'
  import Github from "./Github.vue";
  import UrlMonitor from "./UrlMonitor.vue";
  import { default as glossary } from "../assets/glossary.js"
  import { default as MarkdownIt } from "markdown-it"
  import { default as Emoji } from "markdown-it-emoji"

  var route = useRoute();
  let app = useAppStore();
  let issues = {};
  let md = MarkdownIt({
    html: true,
    linkify: true,
  });
  md.use(Emoji);

  let items = [...glossary];
  for (let i=0; i<items.length; i++) {
    let item = items[i];
    if (item.issue) {
      item = Object.assign({COPY:true}, items[i]);
      items[i] = item;
      item.issue_body = ref(item.issue+'...');
      getIssue(item.issue).then(body=>{
        let html = md.render(body, {});
        //item.issue_body.value = body;
        item.issue_body.value = html;
      });
    }
  }

  const props = defineProps({
    title: { type: String },
    filter: { type: String },
  });

  //var itemIndex = ref(0);
  const curItem = computed(
    ()=> items[app.itemIndex]
  );
  const filteredItems = computed(()=>{
    let { filter, } = props;
    return filter
      ? items.filter(item=>item.hasOwnProperty(filter))
      : items;
  });
  function itemIcon(item) {
    return app.itemIndex === item.value
      ? "mdi-arrow-right-circle"
      : "mdi-circle-small";
  }

  async function getIssue(issue) {
    const msg = 'Glossary.getIssue()';
    const octokit = new Octokit({
      //auth: 'YOUR-TOKEN'
    })
    let { owner, repo, issue_number } = issue;
    issue_number = issue_number+'';

    let path = `GET /repos/${owner}/${repo}/issues/{issue_number}`;
    let res = await octokit.request(path, {
      owner, repo, issue_number,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return res.data.body;
  }

  async function onWatchHash(hash) {
    const msg = "Glossary.onWatchHash";
    let title = hash.replace(/^#\/?/,'');
    let rex = new RegExp(title, "i");
    let index = items.findIndex(item=>{
      return rex.test(item.title) //|| title.search(item.id)
    });
    let item = items[index];
    if (index >= 0) {
      app.setItemIndex(index);
    }
  }

  function onClickItem(item) {
    const msg = 'Glossary.onClickItem()';
    app.setItemIndex(item.value);
    window.location.hash = `#/${item.title}`;
    console.log(msg, route);
  }

  onWatchHash(route.hash);
  watch(()=>route.hash, onWatchHash);
</script>

<style >
.glossary {
  background-color: rgba(256,256,256, 0.1);
  min-width: 60em;
  padding: 1em;
}
.glossary .legend {
  border-left: 1pt solid rgba(255,255,255,0.5);
  padding-left: 0.5em;
}
.glossary-title {
  margin-top: 1em;
  font-size: 120%;
  font-weight: bold;
}
.glossary-summary {
  font-style: italic;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.glossary-text h1,h2,h3,h4 {
  padding-top:0.7em;
  padding-bottom:0.2em;
}
.glossary-text ol {
  margin-left: 2em;
}
.glossary-text ul {
  margin-left: 2em;
}
.glossary-text em {
  font-weight: 700;
  margin-right: 1em;
}
.glossary-text table {
  margin-top: 0.5em;
  border-top: 1pt solid rgba(256,256,256, 0.5);
}
.glossary-text tr {
  vertical-align: top;
  text-align: left;
}
.glossary-text td {
  padding-right: 0.5em;
}
.glossary-text p {
  padding-top: 0.4em;
}
.glossary-text th {
  padding-right: 0.5em;
}
.github {
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.1em;
  padding-bottom: 1em;
}
.library {
  display: inline-block;
  margin: 0.5em;
  margin-left: 0px;
  padding: 0.25em;
  font-family: Courier;
  background-color: rgba(255, 255, 255, 0.2);
}
.issue ul {
  margin-left: 1em;
}

</style>
