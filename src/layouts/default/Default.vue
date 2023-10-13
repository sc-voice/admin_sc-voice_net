<template>
  <v-app>
    <default-bar class="bg-brown-darken-4"/>

    <v-navigation-drawer floating permanent
      class="bg-brown-darken-3"
      expand-on-hover rail
    >
      <v-list-item v-for="filter in filters"
        :prepend-icon="filter.icon"
        :title="filter.title"
        active-class="current-filter"
        :active="filterActive(filter)"
        @click="clickFilter(filter)"
      />
    </v-navigation-drawer>

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useAppStore } from '../../store/app.js'
  import { ref, computed } from 'vue';

  const appStore = useAppStore();
  const { servers, filters, } = appStore;

  function filterActive(filter) {
    return appStore.filter === filter.value;
  }
  function clickFilter(filter) {
    appStore.filter = filter.value;
  }

  const filterClass = computed(()=>{
    return 'current-filter';
  });
</script>

<style >
.current-filter {
}
.current-filter .v-icon {
  color: lemonchiffon;
}
.current-filter .v-list-item__content {
  color: lemonchiffon;
}
</style>


