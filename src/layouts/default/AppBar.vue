<template>
  <v-app-bar flat>
    <v-app-bar-title>
      admin.sc-voice.net
      <div class="text-caption">
        SuttaCentral Voice Administration
      </div>
    </v-app-bar-title>
    <v-spacer />
    <v-icon class="mr-5" @click="onLink" title="Markdown link">
      mdi-link
    </v-icon>
    <div class="mr-5">v{{PACKAGE.version}}</div>
  </v-app-bar>
</template>

<script setup>
  import { default as PACKAGE } from "../../../package.json";
  import { default as glossary } from "../../assets/glossary.js"
  import { useAppStore } from "./../../store/app.js";
  var app = useAppStore();

  function onLink() {
    let title = glossary[app.itemIndex].title;
    let markdown = `[${title}](${window.location})`;
    navigator.clipboard.writeText(markdown);
    alert(`Copied Markdown link ${markdown}`);
  }
</script>
