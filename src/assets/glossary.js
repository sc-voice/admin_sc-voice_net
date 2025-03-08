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
  title: "admin spreadsheet",
  link: "https://docs.google.com/spreadsheets/d/1fQEqMe8SVPAjzvBL267ll7TNGzChV7CNdFSop0qJ24o",
  summary: "Administration Spreadsheet",
  text: `
    Who pays what how
  `,
},{
  title: "api_sc-voice_net",
  link: "https://www.api.sc-voice.net/status",
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
  title: "bilara-data",
  summary: "SuttaCentral Bilara repository",
  github: "suttacentral/bilara-data",
  text: `
    The bilara-data repository provides the raw data filtered
    and copied into https://github.com/ebt-site/ebt-data for
    use in SuttaCentral Voice. The bilara-data repository is quite
    large. The ebt-data repository contains only pli/ms content.
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
  title: "ebt-data",
  summary: "Pruned copy of bilara-data",
  github: "ebt-site/ebt-data",
  admin: true,
  text: `
    SC-Voice is based on the Pali texts and translations, so it doesn't
    need the majority of information stored in the SuttaCentral
    bilara-data repository.
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
  title: "EBT-Vue3",
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
  title: "Feature Backlog",
  summary: "Things we plan to do for SuttaCentral Voice",
  issue: { owner:"dhammaregen", repo:"dhammaregen3", issue_number:1 },
  link: "https://github.com/dhammaregen/dhammaregen3/issues/1",
  admin: true,
},{
  title: "Friends of Voice (Articles)",
  summary: "Articles of Association (CH)",
  email: "sc.voice.friends@gmail.com",
  link: "https://docs.google.com/document/d/137POJx_D7I26D0tx_uIUZn21gtdm2YYk",
  admin: "true",
  text: `
    Association for administering SC-Voice and related sites:  
    Treasurer: Noé Ismet,  
    President: Karl Lew,  
    Secretary: Sabbamitta Silashin,
  `,
},{
  title: "fr.sc-voice.net",
  summary: "SuttaCentral Voice website (FR)",
  link: "https://fr.sc-voice.net",
  github: "sc-voice/fr_sc-voice_net",
  voice: "EBT-Site",
  text: `
    French monolingual SC Voice managed by Noé Ismet.
  `,
},{
  title: "Infomaniak",
  summary: "Domain provider",
  link: "https://infomaniak.com",
  admin: true,
  email: "sc.voice.friends@gmail.com",
  text: `
    EU domain provider for: sc.voice.net, dhammaregen.net.
    Account managed by sc.voice.friends@gmail.com
  `,
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
        independently of sutta content/software; 
        the former is updated automatically,
        the latter is managed by Voice API servers.
      </td>
    </tr>
    </table>
  `,
},{
  title: "Github Actions",
  summary: "Schedule of Github Actions",
  html:`
    <table>
    <caption>Content Schedule</caption>
    <thead>
      <tr>
        <th>Minute</th>
        <th>Hour</th>
        <th>Repository<th>
      </tr>
    </thead>
    <tr> <td>30</td><td>1,9,17</td> <td>ebt-data</td> </tr>
    <tr> <td>00</td><td>2,10,18</td> <td>scv-esm</td> </tr>
    <tr> <td>20</td><td>2,10,18</td> <td>scv-bilara</td> </tr>
    <tr> <td>40</td><td>2,10,18</td> <td>api_sc-voice_net</td> </tr>
    <tr> <td>00</td><td>3,11,19</td> <td>ebt-vue3</td> </tr>
    <tr> <td>20</td><td>3,11,19</td> <td>ebt-site3</td> </tr>
    <tr> <td>20</td><td>3,11,19</td> <td>sc-voice_net</td> </tr>
    <tr> <td>20</td><td>3,11,19</td> <td>dhammaregen3</td> </tr>
    <tr> <td>20</td><td>3,11,19</td> <td>site-tba</td> </tr>

    </table>
  `,
},{
  title: "ru.sc-voice.net",
  summary: "SuttaCentral Voice website (RU)",
  link: "https://ru.sc-voice.net",
  github: "sc-voice/ru_sc-voice_net",
  voice: "EBT-Site",
  text: `
    Russian monolingual SC Voice managed by ???.
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
  title: "scv-esm",
  github: "sc-voice/scv-esm",
  summary: "SuttaCentral libraries for SC-Voice",
  library: "npm install scv-esm",
  text: `
    The scv-esm repository is a Javascript web/desktop library
    for working with information stored in bilara-data
    format.
  `,
},{
  title: "@sc-voice/ms-dpd",
  summary: "Javascript library for DigitalPaliDictionary",
  github: "sc-voice/ms-dpd",
  html: `
    Javascript multilingual library for 
    a condensed version of the 
    <a href="https://digitalpalidictionary.github.io"
    >DigitalPaliDictionary (DPD)</a>
    The MS-DPD content is limited to the Mahāsańghīti content 
    used in SC-Voice. The library is updated 
    regularly following DPD updates.

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

    The staging server will be updated with the
    following schedule-action. Running the schedule-action on your
    personal computer is difficult since part of the
    action requires building a new DockerHub image and
    upload speeds are usually dismally slow.
    So test EVERYTHING on your local machine and just wait.

    NOTE: Content releases are blocked until the major version number
    changes.

  `,
},{
  title: "SuttaCentral Audio Links",
  summary: "Links from SuttaCentral to SuttaCentral Voice",
  github: "sc-voice/api_sc-voice_net",
  admin: true,
  text: `
    SuttaCentral provides audio links to SuttaCentral Voice.
    These links let users hear the Early Buddhist Texts
    in Pali, English, German and other languages.
    SuttaCentral has a vast library of Buddhist documents.
    However, only the segmented texts are supported by
    SuttaCentral Voice. The SuttaCentral audio links
    originally went directly to the Voice website.
    However, there are now multiple, language-specific
    Voice websites (e.g., Dhammagen.net). 
  `,
  html: `
    <p class="mt-3">
    To handle the multiplicity of Voice websites,
    SuttaCentral audio links should now be directed
    to the Voice application server at
    <code>https://www.api.sc-voice.net</code>
    </p>
    <table>
    <caption>
      SuttaCentral Links
      <div style="font-size: smaller;">
        NOTE: Voice only supports 
        <code style="background-color:#9C5B01">root/pli/ms/sutta</code>
        or 
        <code style="background-color:#9C5B01">root/pli/ms/vinaya</code> 
        Bilara documents.
      </div>
    </caption>
    <thead>
      <tr>
        <th>Source</th>
        <th>https://www.api.sc-voice.net/...</th>
        <th>Example</th>
      </tr>
    </thead>
    <tr>
      <td>Site</td>
      <td>
        <pre>/scv/ebt-site/site/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/site/en"
          target="_blank">
          Listen on SC Voice
        </a>
      </td>
    </tr>
    <tr>
      <td>Suttaplex<sup>1</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/thig1.1/en"
          target="_blank">
          thig1.1/en
        </a>
      </td>
    </tr>
    <tr>
      <td>Suttaplex<sup>1</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/an1.171/fr"
          target="_blank">
          an1.171/fr
        </a>
      </td>
    </tr>
    <tr>
      <td>Suttaplex<sup>1</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/an1.2/pt"
          target="_blank">
          an1.2/pt
        </a>
      </td>
    </tr>
    <tr>
      <td>Suttaplex<sup>2</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/cnd11/de"
          target="_blank">
          cnd10/de
        </a>
      </td>
    </tr>
    <tr>
      <td>Suttaplex<sup>3</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/thig1.1/in"
          target="_blank">
          thig1.1/in
        </a>
      </td>
    </tr>
    <tr>
      <td>Sutta<sup>4</sup></th>
      <td>
        <pre>/scv/ebt-site/:sutta_uid/:lang/:author</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/thig1.1/de/sabbamitta"
          target="_blank">
          thig1.1/de/sabbamitta
        </a>
      </td>
    </tr>
    <tr>
      <td>Segment<sup>5</sup></th>
      <td>
        <pre>/scv/ebt-site/:seg_id/:lang/:author</pre>
      </td>
      <td>
        <a href="https://www.api.sc-voice.net/scv/ebt-site/thig1.1:1.1/en/soma"
          target="_blank">
          thig1.1:1.1/en/soma
        </a>
      </td>
    </tr>
    </table>
    <div class="legend">
      <div><sup>1</sup>translated</div>
      <div><sup>2</sup>untranslated</div>
      <div><sup>3</sup>unsupported language (Indonesian)</div>
      <div><sup>4</sup>please implement in SuttaCentral</div>
      <div><sup>5</sup>possible feature for SuttaCentral</div>
    </div>
    <table>
      <caption>URL Variables</caption>
      <tr>
        <th>:sutta_uid</th><td>Sutta identifier (e.g., "thig1.1")</td>
      </tr>
      <tr><th>:lang</th>
        <td>Language identifier (e.g., "en")</td>
      </tr>
      <tr><th>:author</th>
        <td>Author identifier (e.g., "sujato")</td>
      </tr>
      <tr><th>:seg_id</th>
        <td>Segment identifier (e.g., "thig1.1:1.1")</td>
      </tr>
    </table>
  `,
},{
  title: "System Status",
  summary: "SuttaCentral Voice server status",
  link: "https://admin.sc-voice.net",
  github: "sc-voice/admin_sc-voice_net",
  api: "api.sc-voice.net",
  admin: true,
  monitor: "https://www.api.sc-voice.net/scv/probes",
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
  title: "TODO: Pali Text-To-Speech",
  summary: "Open source Pali Text-To-Speech (TTS)",
  admin: true,
  html: `
    <h4>PROBLEM: SC-Voice TTS relies on Amazon Web Services</h4>
    Explore open-source, local AI alternatives to AWS Polly 
    for Pali TTS that can be trained on human voices to 
    reproduce arbitrary Pali with standard IPA.
    The TTS voices should be neutral in affect, having smooth and
    natural breathing cadence along with steady, gentle, 
    and mindful intonation.

    <h4>SOLUTIONS:</h4>
    <ul>
      <li>
        Ven. Bodhirasa suggests:
        <a href="https://github.com/pathnirvana/tipitaka.lk/tree/master/dev%2Faudio">
          Ven. Mettānanda audio
        </a>
        This audio is ideal for listening, however the text spoken
        will not match the Mahāsańghīti corpus exactly, which 
        will result in problems with text/audio alignment
      </li>
      <li>
        Ven. Bodhirasa suggests:
        <a href="https://pnfo.github.io/pali-tts-dataset/">
          TTS trained on Ven. Mettānanda audio
        </a>
        This TTS engine proves that it is possible to train an AI voice
        for Pali. The audio is quite intelligible, but is 
        unfortunately painful to hear for extended listening 
        (e.g., DN33). There is a certain
        "roughness" that might be caused by a voice model that
        produces unsettling abrupt audio transitions.
        The human ear is quite sensitive to discontinuities in 
        higher derivatives, since those discontinuiies were often
        correlated to life-changing environmental stimuli requiring
        immediate attention. 

        Because of this, the resulting listening experience 
        tends to the non-immersive, since it is triggering 
        ancient perceptions of environmental changes requiring
        immediate attention.
        Immersive cadence and intonation are grounded in 
        steady breath/heart cycles honed by years of meditation.
        Since the training data set does indeed have those 
        very immersive qualities, we may have to wait a bit
        until open-source TTS engines have quality similar to
        commercially available TTS engines.
      </li>
    </ul>
    <h4>REFERENCES:</h4>
    <ol>
      <li>
        <a href="https://www.youtube.com/shorts/P_vKzbpp8ss">
          Stepper motor using quintic movement (Karl Lew)
        </a>
        <p>
        Video of stepper motors moving according to quintic equation
        generates very smooth accelerations. 
        The sound heard is from a digital stepper motor, which
        moves in fixed increments (i.e., click-click-click). 
        The sequence of incremental "clicks" is so rapid that it
        is perceived as a single sound that varies 
        smoothly over the range of motion.
        The timing of each individual motor step is calculated
        using quintic equations, which have C4 continuity
        with smooth fourth order derivatives.
        The general reaction to this is a surprised, 
        "that doesn't sound like a jerky robot."
    </ol>
  `,
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
    Languages with extensive translations could be
    allocated their own API server (e.g., pli.api.sc-voice.net)
  `,
},{
  title: "|LEGACY|d3_sc-voice_net",
  summary: "Tipitaka network graphs based on SC-Voice examples",
  github: "sc-voice/d3_sc-voice_net",
  link: "https://sc-voice.github.io/d3_sc-voice_net/",
  text: `
    (DEPRECATED PROTOTYPE)
    Collection of D3 Disjoint Force-Directed Graphs 
    that highlight the links between examples and
    their corresponding Tipitaka documents.
  `,
},{
  title: "|LEGACY|bilara-data-deepl",
  summary: "SuttaCentral Bilara repository (ebt-deepl fork)",
  github: "sc-voice/bilara-data-deepl",
  text: `
    Fork of bilara-data used to upload ebt-deepl pre-translations.
  `,
},{
  title: "|LEGACY|ebt-deepl",
  summary: "EBT DeepL translation adaptor",
  github: "sc-voice/ebt-deepl",
  library: "npm install ebt-deepl (TBD)",
  text: `
    Github repository for adding human-editable DeepL
    EBT translations. Includes glossary support.
  `,
},{
  title: "|LEGACY|ebt-deepl feature backlog",
  summary: "Things we plan to do for ebt-deepl",
  issue: { owner:"sc-voice", repo:"ebt-deepl", issue_number:1 },
  link: "https://github.com/sc-voice/ebt-deepl/issues/1",
  admin: true,
},{
  title: "|LEGACY|Paññābījāni (EBT-Site/FR)",
  summary: "French EBT-Site hosted by Noé Ismet",
  link: "https://pannabijani.net",
  voice: "EBT-Site",
  text: `
    French language EBT-Site
  `,
  github: "pannabijani/ebt-site",
},{
  title: "|LEGACY|Dhammaregen (EBT-Site/DE)",
  summary: "German EBT-Site hosted by Sabbamitta",
  link: "https://dhammaregen.github.io/dhammaregen",
  voice: "EBT-Site",
  text: `
    German language EBT-Site
  `,
  github: "dhammaregen/dhammaregen",
}].map((item,i)=>{ item.value = i; return item});
export default Glossary;
