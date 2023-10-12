// Utilities
import { defineStore } from 'pinia'

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

export const useAppStore = defineStore('app', {
  state: () => ({
    servers: SERVERS,
  }),
})
