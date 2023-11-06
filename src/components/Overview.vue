<template>
  <v-container class="fill-height">
    <v-responsive class="align-start text-start fill-height">
      <div class="text-h5"> Architecture </div>
      <div @click="clickDiagram">
        <img src="https://raw.githubusercontent.com/sc-voice/admin_sc-voice_net/main/public/img/api.sc-voice.net.drawio.svg"
          :height="diagramHeight()"
          class="diagram" />
      </div>
      <Glossary 
        :title="filterTitle"
        :filter="appStore.filter"
      />
    </v-responsive>
  </v-container>
</template>

<script setup>
  import Glossary from "./Glossary.vue";
  import { ref, computed } from "vue";
  import { useAppStore } from '../store/app.js'
  const appStore = useAppStore();
  const filterTitle = computed(()=>{
    let { filter, filters } = appStore;
    return filters.find(f=>filter===f.value).title;
  });

  var thumbnail = ref(true);

  function clickDiagram() {
    console.log("clickDiagram");
    thumbnail.value = !thumbnail.value;
  }

  function diagramHeight() {
    return thumbnail.value ? 100 : 450;
  }
</script>

<style scoped>
.diagram {
  border: 1pt solid rgba(0,0,0,0);
  border-radius: 1em;
  padding:1em;
  background-color:rgba(256,256,256,0.9);
}
</style>
