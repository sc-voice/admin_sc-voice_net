<template>
  <v-row class="mt-5" >
    <v-card max-width="18em" style="border-right: 1pt solid grey">
      <v-card-text>
        <div class="text-h5">
          {{title}}
        </div>
        <v-list density="compact">
          <v-list-item v-for="item in items"
            @click="itemIndex = item.value">
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
        <div class="glossary-text"> {{curItem.text}}</div>
        <div v-if="curItem.github" >
          <a :href="`https://github.com/${curItem.github}`"
            target="_blank">
            <div class="github">
              <Github class="mr-2"/>
              <div>{{`https://github.com/${curItem.github}`}}</div>
            </div>
          </a>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script setup>
  import { computed, ref } from "vue";
  import Github from "./Github.vue";

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    title: { type: String },
  });

  var itemIndex = ref(0);
  const curItem = computed(
    ()=> props.items[itemIndex.value]
  );
  function itemIcon(item) {
    return itemIndex.value === item.value
      ? "mdi-arrow-right-circle"
      : "mdi-circle-small";
  }

</script>

<style scoped>
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
  padding-bottom: 0.5em;
}
.github {
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.5em;
}
</style>
