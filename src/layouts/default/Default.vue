<template>
  <v-app>
    <default-bar class="bg-brown-darken-4"/>

    <!--v-navigation-drawer floating permanent
      class="bg-brown-darken-3"
      expand-on-hover rail
    >
      <v-list-item prepend-icon="mdi-home">
        Overview
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="svr in servers"
        prepend-icon="mdi-server-network" 
        :title="svr.name"
        :subtitle="svr.title"
      >
      </v-list-item>
    </v-navigation-drawer-->

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useAppStore } from '../../store/app.js'
  const { servers } = useAppStore();
</script>


