const Glossary = [{
  title: "admin.sc-voice.net",
  summary: "Voice administration website",
  link: "https://admin.sc-voice.net",
  github: "sc-voice/admin_sc-voice_net",
  admin: true,
  text: `
    (This server)
    Used by Voice administrators to monitor and maintain
    API servers. 
  `,
},{
  title: "api_sc-voice_net",
  summary: "Voice API server source",
  github: "sc-voice/api_sc-voice_net",
  api: "api.sc-voice.net",
  text: `
    Github repository for all Voice API servers.
    The audio storage requirements for Voice API servers
    make it natural to group the servers by language use.
    All Voice API servers have URLs that end with "api.sc-voice.net",
    and are prefixed by the language code or by "www".
    This server also handles SuttaCentral suttaplex audio links
    by redirecting the user to the appropriate website.
  `,
},{
  title: "Dhammaregen",
  summary: "German EBT-Site hosted by Silashin Sabbamitta",
  link: "https://dhammaregen.net",
  voice: "EBT-Site",
  text: `
    German language EBT-Site
  `,
  github: "dhammaregen/dhammaregen3",
},{
  title: "Docker",
  summary: "API server containers",
  link: "https://hub.docker.com/search?q=scvoice",
  admin: true,
  api: "api.sc-voice.net",
  text: `
    Voice API server containers are hosted on Dockerhub
    as "scvoice/api.sc-voice.net".
    The containers are updated by Github Actions from the
    sc-voice/api.sc-voice.net repository (see above).
  `,
},{
  title: "EBT-Site",
  summary: "Github Web Application based on the EBT-Site framework",
  voice: "EBT-Site",
  text: `
    EBT Sites are typically dedicated to a single language. 
    EBT Sites provide segment-by-segment audio
    that can enrich Dhamma study.
    Each EBT-Site has its own wiki and allows users
    to search for Early Buddhist Texts. 
    Users can search by SuttaCentral identifier (e.g., thig1.1) 
    or by search phrase (e.g., "root of suffering").
    EBT-Sites provide curated language-specific examples
    that highlight key Dhamma concepts presented in the
    segmented translation archival maintained by SuttaCentral.
  `,
  link: "https://ebt-site.sc-voice.net",
  github: "sc-voice/ebt-site3",
},{
  title: "Linode Server",
  summary: "Voice API server hardware",
  link: "https://github.com/sc-voice/api_sc-voice_net/wiki/Linode-Server-Setup",
  admin: true,
  api: "api.sc-voice.net",
  text: `
    Voice API servers are currently hosted in the Linode server cloud.
    Linode provides cheap language scalability.
    A Nanode 1GB has 25GB of disk storage, which is sufficient for 
    the audio storage needs of a one or two languages.
  `,
  html: `
    <table>
    <caption>
      <a href="https://github.com/sc-voice/api_sc-voice_net/wiki/Release-Process">
        Software Release Process
      </a>
    </caption>
    <tr>
      <th>Staging</th>
      <td>
        Staging servers (e.g., staging.api.sc-voice.net)
        are updated automatically 
        with new content and software when the 
        Github api_sc-voice_net repository changes.
      </td>
    </tr>
    <tr>
      <th>Production</th>
      <td>
        Production servers 
        (e.g., www.api.sc-voice.net)
        are updated automatically 
        with new content and software 
        as long as the minor version number of the
        Github api_sc-voice_net repository does NOT change.
      </td>
    </tr>
    <tr>
      <th>EBT Sites</th>
      <td>
        EBT Site wiki content/software are handled 
        independently of sutta content/software 
        managed by Voice API servers
        and are updated automatically.
      </td>
    </tr>
    </table>
  `,
},{
  title: "sc-voice/ebt-vue3",
  summary: "EBT-Site application library",
  voice: "EBT-Site",
  link: "https://ebt-vue3.sc-voice.net",
  github: "sc-voice/ebt-vue3",
  library: "npm install ebt-vue3",
  text: `
    All EBT-Sites use the "ebt-vue3" library, which is an NPM package.
    EBT-Vue3 is written using Vue3 and Vuetify3.
  `,
},{
  title: "pli.api.sc-voice.net",
  summary: "Pali (pli) Voice API server",
  link: "https://pli.api.sc-voice.net/status",
  github: "sc-voice/api_sc-voice_net",
  api: "api.sc-voice.net",
  admin: true,
  monitor: "https://pli.api.sc-voice.net/scv/probes",
  text: `
    (not implemented)
    Pali (pli) Voice API server will eventually
    handle all Pali audio. Although any API server
    can handle Pali, Pali audio requirements will probably
    exceed those for any other language. 
    In addition, all translations need Pali anyway, so
    centralizing Pali audio frees up disk for all other
    API servers.
  `,
},{
  title: "s1.sc-voice.net",
  summary: "prototype Voice API server",
  link: "https://s1.sc-voice.net",
  api: "voice.suttacentral.net",
  github: "sc-voice/scv-server",
  text: `
    (deprecated)
    Prototype for api.sc-voice.net will be shut down
    after www.sc-voice.net is fully in production.
  `,
},{
  title: "sc-voice.net",
  summary: "SuttaCentral Voice website",
  link: "https://sc-voice.net",
  github: "sc-voice/sc-voice_net",
  voice: "EBT-Site",
  text: `
    The new website for SuttaCentral Voice displays
    suttas, search results, and wiki pages
    using "cards" for side-by-side comparison.
    In addition sutta cards provide random access to segments 
    for a "click to hear" experience.
  `,
},{
  title: "scv-bilara",
  github: "sc-voice/scv-bilara",
  summary: "Linux command-line search utility for EBT texts",
  library: "npm install scv-bilara",
  text: `
    The scv-bilara repository is a Javascript library.
    It is also a console application.
    This is the search engine for SuttaCentral Voice.
  `,
},{
  title: "@sc-voice/state-log",
  github: "sc-voice/state-log",
  link: "https://sc-voice.github.io/state-log",
  summary: "Javascript library for logging server JSON state",
  library: "npm install @sc-voice/state-log",
  text: `
    Javascript client and server library for monitoring 
    remote server state. 
    Compatible with any HTTP server that provide status information 
    in JSON format.
  `,
},{
  title: "staging.api.sc-voice.net",
  summary: "Staging Voice API server",
  link: "https://staging.api.sc-voice.net/status",
  github: "sc-voice/api_sc-voice_net",
  api: "api.sc-voice.net",
  admin: true,
  monitor: "https://staging.api.sc-voice.net/scv/probes",
  text: `
    The staging Voice API server is used to test
    new software releases before pushing those
    releases to www.api.sc-voice.net
  `,
},{
  title: "System Status",
  summary: "SuttaCentral Voice server status",
  link: "https://admin.sc-voice.net",
  github: "sc-voice/admin_sc-voice_net",
  api: "api.sc-voice.net",
  admin: true,
  monitor: "https://staging.api.sc-voice.net/scv/probes",
  text: `
    The System Status panel shows the status of all Voice servers.
    A green checkmark indicates that the given server is 
    behaving normally.
    A red exclamation indicates that the given server is
    dead.
    System status is provided by Voice API servers
    (i.e., xxx.api.sc-voice.net).
    If a Voice API server is down, it won't be able
    to give system status.
  `,
  html: `
    <table>
    <caption>Sub-panel types</caption>
    <tr><th>statfs</th><td>
      sub-panels show file and disk use percentages. 
      Disk caches need to be cleared when percentages fall below 10%.
    </td></tr>
    <tr><th>play/segment</th><td>
      sub-panels are shown for older servers
      that do not support the statfs API. These sub-panels show
      the results of requesting audio for "thig1.1:1.1/en/soma".
    </td></tr>
    </table>
  `,
},{
  title: "voice.suttacentral.net",
  summary: "Legacy Voice website",
  link: "https://voice.suttacentral.net",
  api: "voice.suttacentral.net",
  voice: "(deprecated)",
  text: `
    The original Voice website has been superceded 
    by multiple EBT-Sites implemented using
    more current technology. 
    It is no longer being maintained.
  `,
  github: "sc-voice/sc-voice",
},{
  title: "www.api.sc-voice.net",
  summary: "Default Voice API server",
  link: "https://www.api.sc-voice.net/status",
  github: "sc-voice/api_sc-voice_net",
  api: "api.sc-voice.net",
  admin: true,
  monitor: "https://www.api.sc-voice.net/scv/probes",
  text: `
    The default Voice API server handles languages
    with few segmented translations.
    Languages with extensive translations should  be
    allocated their own API server (e.g., pli.api.sc-voice.net)
  `,
}].map((item,i)=>{ item.value = i; return item});
export default Glossary;
