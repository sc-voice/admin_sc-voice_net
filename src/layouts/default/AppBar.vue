<template>
  <v-app-bar flat>
    <v-app-bar-title>
      admin.sc-voice.net
      <div class="text-caption">
        SuttaCentral Voice Administration
      </div>
    </v-app-bar-title>
    <v-spacer />
    <div class="mr-5">v{{PACKAGE.version}}</div>
  </v-app-bar>
</template>

<script setup>
  import { default as PACKAGE } from "../../../package.json";
</script>
