// Utilities
import { defineStore } from 'pinia';
import { ref } from 'vue';

const SERVERS = [{
  name:'www.api.sc-voice.net',
  url: 'https://www.api.sc-voice.net',
  title: 'Default language server; SuttaCentral gateway',
},{
  name:'de.api.sc-voice.net',
  url: 'https://de.api.sc-voice.net',
  title: 'German server (DE)',
},{
  name:'en.api.sc-voice.net',
  url: 'https://en.api.sc-voice.net',
  title: 'English server (EN)',
},{
  name:'s1.sc-voice.net',
  url: 'https://s1.sc-voice.net',
  title: 'Legacy scv-server',
}]

const FILTERS=[{
  title: 'Show all',
  icon: 'mdi-check-all',
  value: "",
},{
  title: 'Public Voice websites',
  icon: 'mdi-account-voice',
  value: 'voice',
},{
  title: 'Administration',
  icon: 'mdi-shield-crown',
  value: 'admin',
},{
  title: 'Voice API Servers',
  icon: 'mdi-server',
  value: 'api',
}];

export const useAppStore = defineStore('app', {
  state: () => ({
    servers: SERVERS,
    filters: FILTERS,
    filter: ref('api'),
  }),
})
