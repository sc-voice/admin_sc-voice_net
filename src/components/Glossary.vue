<template>
  <v-row class="mt-5" >
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
    <v-card max-width="30em">
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
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script setup>
  import { watch, computed, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useAppStore } from '../store/app.js'
  import Github from "./Github.vue";
  import UrlMonitor from "./UrlMonitor.vue";

  var route = useRoute();
  let app = useAppStore();

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    title: { type: String },
    filter: { type: String },
  });

  //var itemIndex = ref(0);
  const curItem = computed(
    ()=> props.items[app.itemIndex]
  );
  const filteredItems = computed(()=>{
    let { filter, items } = props;
    return filter
      ? items.filter(item=>item.hasOwnProperty(filter))
      : items;
  });
  function itemIcon(item) {
    return app.itemIndex === item.value
      ? "mdi-arrow-right-circle"
      : "mdi-circle-small";
  }

  async function onWatchHash(hash) {
    const msg = "Glossary.onWatchHash";
    let { items } = props;
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
  max-width: 40em;
  padding: 1em;
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
.glossary-text table {
  margin-top: 0.5em;
  border-top: 1pt solid rgba(256,256,256, 0.5);
}
.glossary-text tr {
  vertical-align: top;
  text-align: left;
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

</style>
