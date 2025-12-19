import{ae as be,p as C,k as z,a3 as Gt,a1 as de,af as Xe,aa as se,g as Z,ag as Ht,r as V,Q as qt,f as ve,A as H,V as Qe,ah as Ft,ai as Wt,aj as Ae,W as Pe,ak as Ut,x as Yt,c as y,b as I,q as _,n as Y,m as M,al as Ze,S as D,am as Me,an as Jt,ao as Kt,ap as Xt,a0 as ee,aq as Se,ar as we,E as re,as as Qt,$ as et,s as B,at as Ve,R as J,t as k,a5 as ke,l as w,X as oe,a6 as Zt,o as en,au as tn,av as nn,aw as an,ax as sn,y as Be,a7 as le,ay as rn,az as je,a as Ge,i as me,h as ge,aA as tt,aB as A,B as ye,v as nt,aC as on,a8 as He,J as qe}from"./index-BCOMMC6Z.js";const ln=["top","bottom"],cn=["start","end","left","right"];function na(e,n){let[i,t]=e.split(" ");return t||(t=be(ln,i)?"start":be(cn,i)?"top":"center"),{side:Fe(i,n),align:Fe(t,n)}}function Fe(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const q=C({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function un(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",i=arguments.length>2?arguments[2]:void 0;return z()({name:i??Gt(Xe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...q()},setup(t,s){let{slots:a}=s;return()=>de(t.tag,{class:[e,t.class],style:t.style},a.default?.())}})}function dn(e,n,i,t){if(!i||se(e)||se(n))return;const s=i.get(e);if(s)s.set(n,t);else{const a=new WeakMap;a.set(n,t),i.set(e,a)}}function vn(e,n,i){if(!i||se(e)||se(n))return null;const t=i.get(e)?.get(n);if(typeof t=="boolean")return t;const s=i.get(n)?.get(e);return typeof s=="boolean"?s:null}function at(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new WeakMap;if(e===n)return!0;if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime()||e!==Object(e)||n!==Object(n))return!1;const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;const s=vn(e,n,i);return s||(dn(e,n,i,!0),t.every(a=>at(e[a],n[a],i)))}function U(e){const n=Z("useRender");n.render=e}function mn(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{leading:!0,trailing:!0},t=0,s=0,a=!1,r=0;function o(){clearTimeout(t),a=!1,r=0}const c=function(){for(var u=arguments.length,v=new Array(u),d=0;d<u;d++)v[d]=arguments[d];clearTimeout(t);const g=Date.now();r||(r=g);const h=g-Math.max(r,s);function b(){s=Date.now(),t=setTimeout(o,n),e(...v)}a?h>=n?b():i.trailing&&(t=setTimeout(b,n-h)):(a=!0,i.leading&&b())};return c.clear=o,c.immediate=e,c}function aa(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const i=Ht(),t=V();if(qt){const s=new ResizeObserver(a=>{e?.(a,s),a.length&&(n==="content"?t.value=a[0].contentRect:t.value=a[0].target.getBoundingClientRect())});ve(()=>{s.disconnect()}),H(()=>i.el,(a,r)=>{r&&(s.unobserve(r),t.value=void 0),a&&s.observe(a)},{flush:"post"})}return{resizeRef:i,contentRect:Qe(t)}}const ia=[{title:"admin.sc-voice.net",summary:"Voice administration website",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",admin:!0,text:`
    (This server)
    Used by Voice administrators to monitor and maintain
    API servers. 
  `},{title:"admin spreadsheet",link:"https://docs.google.com/spreadsheets/d/1fQEqMe8SVPAjzvBL267ll7TNGzChV7CNdFSop0qJ24o",summary:"Administration Spreadsheet",text:`
    Who pays what how
  `},{title:"api_sc-voice_net",link:"https://www.api.sc-voice.net/status",summary:"Voice API server source",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",text:`
    Github repository for all Voice API servers.
    The audio storage requirements for Voice API servers
    make it natural to group the servers by language use.
    All Voice API servers have URLs that end with "api.sc-voice.net",
    and are prefixed by the language code or by "www".
    This server also handles SuttaCentral suttaplex audio links
    by redirecting the user to the appropriate website.
  `},{title:"bilara-data",summary:"SuttaCentral Bilara repository",github:"suttacentral/bilara-data",text:`
    The bilara-data repository provides the raw data filtered
    and copied into https://github.com/ebt-site/ebt-data for
    use in SuttaCentral Voice. The bilara-data repository is quite
    large. The ebt-data repository contains only pli/ms content.
  `},{title:"Dhammaregen",summary:"German EBT-Site hosted by Silashin Sabbamitta",link:"https://dhammaregen.net",voice:"EBT-Site",text:`
    German language EBT-Site
  `,github:"dhammaregen/dhammaregen3"},{title:"Docker",summary:"API server containers",link:"https://hub.docker.com/search?q=scvoice",admin:!0,api:"api.sc-voice.net",text:`
    Voice API server containers are hosted on Dockerhub
    as "scvoice/api.sc-voice.net".
    The containers are updated by Github Actions from the
    sc-voice/api.sc-voice.net repository (see above).
  `},{title:"ebt-data",summary:"Pruned copy of bilara-data",github:"ebt-site/ebt-data",admin:!0,text:`
    SC-Voice is based on the Pali texts and translations, so it doesn't
    need the majority of information stored in the SuttaCentral
    bilara-data repository.
  `},{title:"EBT-Site",summary:"Github Web Application based on the EBT-Site framework",voice:"EBT-Site",text:`
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
  `,link:"https://ebt-site.sc-voice.net",github:"sc-voice/ebt-site3"},{title:"EBT-Vue3",summary:"EBT-Site application library",voice:"EBT-Site",link:"https://ebt-vue3.sc-voice.net",github:"sc-voice/ebt-vue3",library:"npm install ebt-vue3",text:`
    All EBT-Sites use the "ebt-vue3" library, which is an NPM package.
    EBT-Vue3 is written using Vue3 and Vuetify3.
  `},{title:"Feature Backlog",summary:"Things we plan to do for SuttaCentral Voice",issue:{owner:"dhammaregen",repo:"dhammaregen3",issue_number:1},link:"https://github.com/dhammaregen/dhammaregen3/issues/1",admin:!0},{title:"Friends of Voice (Articles)",summary:"Articles of Association (CH)",email:"sc.voice.friends@gmail.com",link:"https://docs.google.com/document/d/137POJx_D7I26D0tx_uIUZn21gtdm2YYk",admin:"true",text:`
    Association for administering SC-Voice and related sites:  
    Treasurer: Noé Ismet,  
    President: Karl Lew,  
    Secretary: Sabbamitta Silashin,
  `},{title:"fr.sc-voice.net",summary:"SuttaCentral Voice website (FR)",link:"https://fr.sc-voice.net",github:"sc-voice/fr_sc-voice_net",voice:"EBT-Site",text:`
    French monolingual SC Voice managed by Noé Ismet.
  `},{title:"Infomaniak",summary:"Domain provider",link:"https://infomaniak.com",admin:!0,email:"sc.voice.friends@gmail.com",text:`
    EU domain provider for: sc.voice.net, dhammaregen.net.
    Account managed by sc.voice.friends@gmail.com
  `},{title:"Linode Server",summary:"Voice API server hardware",link:"https://github.com/sc-voice/api_sc-voice_net/wiki/Linode-Server-Setup",admin:!0,api:"api.sc-voice.net",text:`
    Voice API servers are currently hosted in the Linode server cloud.
    Linode provides cheap language scalability.
    A Nanode 1GB has 25GB of disk storage, which is sufficient for 
    the audio storage needs of a one or two languages.
  `,html:`
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
  `},{title:"Github Actions",summary:"Schedule of Github Actions",html:`
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
  `},{title:"ru.sc-voice.net",summary:"SuttaCentral Voice website (RU)",link:"https://ru.sc-voice.net",github:"sc-voice/ru_sc-voice_net",voice:"EBT-Site",text:`
    Russian monolingual SC Voice managed by ???.
  `},{title:"sc-voice.net",summary:"SuttaCentral Voice website",link:"https://sc-voice.net",github:"sc-voice/sc-voice_net",voice:"EBT-Site",text:`
    The new website for SuttaCentral Voice displays
    suttas, search results, and wiki pages
    using "cards" for side-by-side comparison.
    In addition sutta cards provide random access to segments 
    for a "click to hear" experience.
  `},{title:"scv-app",github:"sc-voice/scv-app",summary:"SCVoice mobile application source (iOS, MacOS)",text:`
    Primary repository for scVoice mobile applications.
    SCVoice mobile applications are primarily designed for offline usage,
    although they may include internet resources as needed.
    Currently includes Apple application and may include Android mobile 
    and/or Flutter applications as well.
  `},{title:"scv-bilara",github:"sc-voice/scv-bilara",summary:"Linux command-line search utility for EBT texts",library:"npm install scv-bilara",text:`
    The scv-bilara repository is a Javascript library.
    It is also a console application.
    This is the search engine for SuttaCentral Voice.
  `},{title:"scv-esm",github:"sc-voice/scv-esm",summary:"SuttaCentral libraries for SC-Voice",library:"npm install scv-esm",text:`
    The scv-esm repository is a Javascript web/desktop library
    for working with information stored in bilara-data
    format.
  `},{title:"@sc-voice/ms-dpd",summary:"Javascript library for DigitalPaliDictionary",github:"sc-voice/ms-dpd",html:`
    Javascript multilingual library for 
    a condensed version of the 
    <a href="https://digitalpalidictionary.github.io"
    >DigitalPaliDictionary (DPD)</a>
    The MS-DPD content is limited to the Mahāsańghīti content 
    used in SC-Voice. The library is updated 
    regularly following DPD updates.

  `},{title:"@sc-voice/state-log",github:"sc-voice/state-log",link:"https://sc-voice.github.io/state-log",summary:"Javascript library for logging server JSON state",library:"npm install @sc-voice/state-log",text:`
    Javascript client and server library for monitoring 
    remote server state. 
    Compatible with any HTTP server that provide status information 
    in JSON format.
  `},{title:"staging.api.sc-voice.net",summary:"Staging Voice API server",link:"https://staging.api.sc-voice.net/status",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://staging.api.sc-voice.net/scv/probes",text:`
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

  `},{title:"SuttaCentral Audio Links",summary:"Links from SuttaCentral to SuttaCentral Voice",github:"sc-voice/api_sc-voice_net",admin:!0,text:`
    SuttaCentral provides audio links to SuttaCentral Voice.
    These links let users hear the Early Buddhist Texts
    in Pali, English, German and other languages.
    SuttaCentral has a vast library of Buddhist documents.
    However, only the segmented texts are supported by
    SuttaCentral Voice. The SuttaCentral audio links
    originally went directly to the Voice website.
    However, there are now multiple, language-specific
    Voice websites (e.g., Dhammagen.net). 
  `,html:`
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
  `},{title:"System Status",summary:"SuttaCentral Voice server status",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://www.api.sc-voice.net/scv/probes",text:`
    The System Status panel shows the status of all Voice servers.
    A green checkmark indicates that the given server is 
    behaving normally.
    A red exclamation indicates that the given server is
    dead.
    System status is provided by Voice API servers
    (i.e., xxx.api.sc-voice.net).
    If a Voice API server is down, it won't be able
    to give system status.
  `,html:`
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
  `},{title:"TODO: Pali Text-To-Speech",summary:"Open source Pali Text-To-Speech (TTS)",admin:!0,html:`
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
  `},{title:"www.api.sc-voice.net",summary:"Default Voice API server",link:"https://www.api.sc-voice.net/status",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://www.api.sc-voice.net/scv/probes",text:`
    The default Voice API server handles languages
    with few segmented translations.
    Languages with extensive translations could be
    allocated their own API server (e.g., pli.api.sc-voice.net)
  `},{title:"|LEGACY|d3_sc-voice_net",summary:"Tipitaka network graphs based on SC-Voice examples",github:"sc-voice/d3_sc-voice_net",link:"https://sc-voice.github.io/d3_sc-voice_net/",text:`
    (DEPRECATED PROTOTYPE)
    Collection of D3 Disjoint Force-Directed Graphs 
    that highlight the links between examples and
    their corresponding Tipitaka documents.
  `},{title:"|LEGACY|bilara-data-deepl",summary:"SuttaCentral Bilara repository (ebt-deepl fork)",github:"sc-voice/bilara-data-deepl",text:`
    Fork of bilara-data used to upload ebt-deepl pre-translations.
  `},{title:"|LEGACY|ebt-deepl",summary:"EBT DeepL translation adaptor",github:"sc-voice/ebt-deepl",library:"npm install ebt-deepl (TBD)",text:`
    Github repository for adding human-editable DeepL
    EBT translations. Includes glossary support.
  `},{title:"|LEGACY|ebt-deepl feature backlog",summary:"Things we plan to do for ebt-deepl",issue:{owner:"sc-voice",repo:"ebt-deepl",issue_number:1},link:"https://github.com/sc-voice/ebt-deepl/issues/1",admin:!0},{title:"|LEGACY|Paññābījāni (EBT-Site/FR)",summary:"French EBT-Site hosted by Noé Ismet",link:"https://pannabijani.net",voice:"EBT-Site",text:`
    French language EBT-Site
  `,github:"pannabijani/ebt-site"},{title:"|LEGACY|Dhammaregen (EBT-Site/DE)",summary:"German EBT-Site hosted by Sabbamitta",link:"https://dhammaregen.github.io/dhammaregen",voice:"EBT-Site",text:`
    German language EBT-Site
  `,github:"dhammaregen/dhammaregen"}].map((e,n)=>(e.value=n,e)),gn=[{name:"www.api.sc-voice.net",url:"https://www.api.sc-voice.net",title:"Default language server; SuttaCentral gateway"},{name:"pli.api.sc-voice.net",url:"https://pli.api.sc-voice.net",title:"Pali server (pli)"},{name:"s1.sc-voice.net",url:"https://s1.sc-voice.net",title:"Legacy scv-server"}],fn=[{title:"Glossary",icon:"mdi-file-word-box",value:""},{title:"SuttaCentral Voice",icon:"mdi-account-voice",value:"voice"},{title:"Administration",icon:"mdi-shield-crown",value:"admin"},{title:"Voice API Servers",icon:"mdi-server",value:"api"},{title:"Software Libraries",icon:"mdi-library",value:"library"}],sa=Ft("app",{state:()=>({servers:gn,filters:fn,filter:V(""),itemIndex:V(0)}),actions:{setItemIndex(e){this.itemIndex=e}}}),fe=C({tag:{type:[String,Object,Function],default:"div"}},"tag"),hn=C({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function R(e,n,i){return z()({name:e,props:hn({mode:i,origin:n}),setup(t,s){let{slots:a}=s;const r={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:u,offsetWidth:v,offsetHeight:d}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${u}px`,o.style.width=`${v}px`,o.style.height=`${d}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&o?._transitionInitialStyles){const{position:c,top:u,left:v,width:d,height:g}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=u||"",o.style.left=v||"",o.style.width=d||"",o.style.height=g||""}}};return()=>{const o=t.group?Ae:Pe;return de(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},a.default)}}})}function it(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z()({name:e,props:{mode:{type:String,default:i},disabled:{type:Boolean,default:Wt()},group:Boolean},setup(t,s){let{slots:a}=s;const r=t.group?Ae:Pe;return()=>de(r,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},a.default)}})}function st(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Xe(`offset-${i}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[i]:r.style[i]}},onEnter(r){const o=r._initialStyle;if(!o)return;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const c=`${r[t]}px`;r.style[i]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[i]=c})},onAfterEnter:a,onEnterCancelled:a,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[i]:r.style[i]},r.style.overflow="hidden",r.style[i]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[i]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(r){e&&r._parent&&r._parent.classList.remove(e),a(r)}function a(r){if(!r._initialStyle)return;const o=r._initialStyle[i];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[i]=o),delete r._initialStyle}}R("fab-transition","center center","out-in");R("dialog-bottom-transition");R("dialog-top-transition");R("fade-transition");R("scale-transition");R("scroll-x-transition");R("scroll-x-reverse-transition");R("scroll-y-transition");R("scroll-y-reverse-transition");R("slide-x-transition");R("slide-x-reverse-transition");R("slide-y-transition");R("slide-y-reverse-transition");const ra=it("expand-transition",st());it("expand-x-transition",st("",!0));const pn=C({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),_e=z(!1)({name:"VDefaultsProvider",props:pn(),setup(e,n){let{slots:i}=n;const{defaults:t,disabled:s,reset:a,root:r,scoped:o}=Ut(e);return Yt(t,{reset:a,root:r,scoped:o,disabled:s}),()=>i.default?.()}}),rt=C({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ot(e){return{dimensionStyles:y(()=>{const i={},t=I(e.height),s=I(e.maxHeight),a=I(e.maxWidth),r=I(e.minHeight),o=I(e.minWidth),c=I(e.width);return t!=null&&(i.height=t),s!=null&&(i.maxHeight=s),a!=null&&(i.maxWidth=a),r!=null&&(i.minHeight=r),o!=null&&(i.minWidth=o),c!=null&&(i.width=c),i})}}function yn(e){return{aspectStyles:y(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const lt=C({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...q(),...rt()},"VResponsive"),We=z()({name:"VResponsive",props:lt(),setup(e,n){let{slots:i}=n;const{aspectStyles:t}=yn(e),{dimensionStyles:s}=ot(e);return U(()=>_("div",{class:M(["v-responsive",{"v-responsive--inline":e.inline},e.class]),style:Y([s.value,e.style])},[_("div",{class:"v-responsive__sizer",style:Y(t.value)},null),i.additional?.(),i.default&&_("div",{class:M(["v-responsive__content",e.contentClass])},[i.default()])])),{}}});function Ie(e){return Ze(()=>{const{class:n,style:i}=wn(e);return{colorClasses:n,colorStyles:i}})}function bn(e){const{colorClasses:n,colorStyles:i}=Ie(()=>({text:D(e)}));return{textColorClasses:n,textColorStyles:i}}function Sn(e){const{colorClasses:n,colorStyles:i}=Ie(()=>({background:D(e)}));return{backgroundColorClasses:n,backgroundColorStyles:i}}function wn(e){const n=D(e),i=[],t={};if(n.background)if(Me(n.background)){if(t.backgroundColor=n.background,!n.text&&Jt(n.background)){const s=Kt(n.background);if(s.a==null||s.a===1){const a=Xt(s);t.color=a,t.caretColor=a}}}else i.push(`bg-${n.background}`);return n.text&&(Me(n.text)?(t.color=n.text,t.caretColor=n.text):i.push(`text-${n.text}`)),{class:i,style:t}}const Le=C({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Re(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ee();return{roundedClasses:y(()=>{const t=Se(e)?e.value:e.rounded,s=Se(e)?!1:e.tile,a=[];if(s||t===!1)a.push("rounded-0");else if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`rounded-${r}`);return a})}}const kn=C({transition:{type:null,default:"fade-transition",validator:e=>e!==!0}},"transition"),ie=(e,n)=>{let{slots:i}=n;const{transition:t,disabled:s,group:a,...r}=e,{component:o=a?Ae:Pe,...c}=we(t)?t:{};let u;return we(t)?u=re(c,Qt({disabled:s,group:a}),r):u=re({name:s||!t?"":t},r),de(o,u,i)};function _n(e,n){if(!et)return;const i=n.modifiers||{},t=n.value,{handler:s,options:a}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=e._observe?.[n.instance.$.uid];if(!u)return;const v=o.some(d=>d.isIntersecting);s&&(!i.quiet||u.init)&&(!i.once||v||u.init)&&s(v,o,c),v&&i.once?ct(e,n):u.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function ct(e,n){const i=e._observe?.[n.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ue={mounted:_n,unmounted:ct},Cn=C({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...lt(),...q(),...Le(),...kn()},"VImg"),Tn=z()({name:"VImg",directives:{vIntersect:Ue},props:Cn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:i,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:a}=Sn(()=>e.color),{roundedClasses:r}=Re(e),o=Z("VImg"),c=B(""),u=V(),v=B(e.eager?"loading":"idle"),d=B(),g=B(),h=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=y(()=>h.value.aspect||d.value/g.value||0);H(()=>e.src,()=>{x(v.value!=="idle")}),H(b,(S,E)=>{!S&&E&&u.value&&m(u.value)}),Ve(()=>x());function x(S){if(!(e.eager&&S)&&!(et&&!S&&!e.eager)){if(v.value="loading",h.value.lazySrc){const E=new Image;E.src=h.value.lazySrc,m(E,null)}h.value.src&&J(()=>{i("loadstart",u.value?.currentSrc||h.value.src),setTimeout(()=>{if(!o.isUnmounted)if(u.value?.complete){if(u.value.naturalWidth||F(),v.value==="error")return;b.value||m(u.value,null),v.value==="loading"&&$()}else b.value||m(u.value),P()})})}}function $(){o.isUnmounted||(P(),m(u.value),v.value="loaded",i("load",u.value?.currentSrc||h.value.src))}function F(){o.isUnmounted||(v.value="error",i("error",u.value?.currentSrc||h.value.src))}function P(){const S=u.value;S&&(c.value=S.currentSrc||S.src)}let l=-1;ve(()=>{clearTimeout(l)});function m(S){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const te=()=>{if(clearTimeout(l),o.isUnmounted)return;const{naturalHeight:ne,naturalWidth:ae}=S;ne||ae?(d.value=ae,g.value=ne):!S.complete&&v.value==="loading"&&E!=null?l=window.setTimeout(te,E):(S.currentSrc.endsWith(".svg")||S.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};te()}const f=k(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{if(!h.value.src||v.value==="idle")return null;const S=_("img",{class:M(["v-img__img",f.value]),style:{objectPosition:e.position},crossorigin:e.crossorigin,src:h.value.src,srcset:h.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:$,onError:F},null),E=t.sources?.();return w(ie,{transition:e.transition,appear:!0},{default:()=>[ke(E?_("picture",{class:"v-img__picture"},[E,S]):S,[[Zt,v.value==="loaded"]])]})},O=()=>w(ie,{transition:e.transition},{default:()=>[h.value.lazySrc&&v.value!=="loaded"&&_("img",{class:M(["v-img__img","v-img__img--preload",f.value]),style:{objectPosition:e.position},crossorigin:e.crossorigin,src:h.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),W=()=>t.placeholder?w(ie,{transition:e.transition,appear:!0},{default:()=>[(v.value==="loading"||v.value==="error"&&!t.error)&&_("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,N=()=>t.error?w(ie,{transition:e.transition,appear:!0},{default:()=>[v.value==="error"&&_("div",{class:"v-img__error"},[t.error()])]}):null,j=()=>e.gradient?_("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,G=B(!1);{const S=H(b,E=>{E&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.value=!0})}),S())})}return U(()=>{const S=We.filterProps(e);return ke(w(We,re({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!G.value},s.value,r.value,e.class],style:[{width:I(e.width==="auto"?d.value:e.width)},a.value,e.style]},S,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>_(oe,null,[w(p,null,null),w(O,null,null),w(j,null,null),w(W,null,null),w(N,null,null)]),default:t.default}),[[Ue,{handler:x,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:u,state:v,naturalWidth:d,naturalHeight:g}}}),ut=C({border:[Boolean,Number,String]},"border");function dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ee();return{borderClasses:y(()=>{const t=e.border;return t===!0||t===""?`${n}--border`:typeof t=="string"||t===0?String(t).split(" ").map(s=>`border-${s}`):[]})}}const xn=C({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function En(e){return{elevationClasses:k(()=>{const i=Se(e)?e.value:e.elevation;return i==null?[]:[`elevation-${i}`]})}}function oa(){const e=B(!1);return en(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:k(()=>e.value?void 0:{transition:"none !important"}),isBooted:Qe(e)}}const An=[null,"default","comfortable","compact"],vt=C({density:{type:String,default:"default",validator:e=>An.includes(e)}},"density");function mt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ee();return{densityClasses:k(()=>`${n}--density-${e.density}`)}}const Pn=["elevated","flat","tonal","outlined","text","plain"];function gt(e,n){return _(oe,null,[e&&_("span",{key:"overlay",class:M(`${n}__overlay`)},null),_("span",{key:"underlay",class:M(`${n}__underlay`)},null)])}const ft=C({color:String,variant:{type:String,default:"elevated",validator:e=>Pn.includes(e)}},"variant");function ht(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ee();const i=k(()=>{const{variant:a}=D(e);return`${n}--variant-${a}`}),{colorClasses:t,colorStyles:s}=Ie(()=>{const{variant:a,color:r}=D(e);return{[["elevated","flat"].includes(a)?"background":"text"]:r}});return{colorClasses:t,colorStyles:s,variantClasses:i}}const Vn=["x-small","small","default","large","x-large"],pt=C({size:{type:[String,Number],default:"default"}},"size");function yt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ee();return Ze(()=>{const i=e.size;let t,s;return be(Vn,i)?t=`${n}--size-${i}`:i&&(s={width:I(i),height:I(i)}),{sizeClasses:t,sizeStyles:s}})}const Bn=C({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:le,opacity:[String,Number],...q(),...pt(),...fe({tag:"i"}),...Be()},"VIcon"),Ce=z()({name:"VIcon",props:Bn(),setup(e,n){let{attrs:i,slots:t}=n;const s=B(),{themeClasses:a}=tn(),{iconData:r}=nn(()=>s.value||e.icon),{sizeClasses:o}=yt(e),{textColorClasses:c,textColorStyles:u}=bn(()=>e.color);return U(()=>{const v=t.default?.();v&&(s.value=an(v).filter(g=>g.type===sn&&g.children&&typeof g.children=="string")[0]?.children);const d=!!(i.onClick||i.onClickOnce);return w(r.value.component,{tag:e.tag,icon:r.value.icon,class:M(["v-icon","notranslate",a.value,o.value,c.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class]),style:Y([{"--v-icon-opacity":e.opacity},o.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},u.value,e.style]),role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[v]})}),{}}});function In(){const e=Z("useRoute");return y(()=>e?.proxy?.$route)}function la(){return Z("useRouter")?.proxy?.$router}function Ln(e,n){const i=rn("RouterLink"),t=k(()=>!!(e.href||e.to)),s=y(()=>t?.value||je(n,"click")||je(e,"click"));if(typeof i=="string"||!("useLink"in i)){const d=k(()=>e.href);return{isLink:t,isRouterLink:k(()=>!1),isClickable:s,href:d,linkProps:Ge({href:d})}}const a=i.useLink({to:k(()=>e.to||""),replace:k(()=>e.replace)}),r=y(()=>e.to?a:void 0),o=In(),c=y(()=>r.value?e.exact?o.value?r.value.isExactActive?.value&&at(r.value.route.value.query,o.value.query):r.value.isExactActive?.value??!1:r.value.isActive?.value??!1:!1),u=y(()=>e.to?r.value?.route.value.href:e.href),v=k(()=>!!e.to);return{isLink:t,isRouterLink:v,isClickable:s,isActive:c,route:r.value?.route,navigate:r.value?.navigate,href:u,linkProps:Ge({href:u,"aria-current":k(()=>c.value?"page":void 0),"aria-disabled":k(()=>e.disabled&&t.value?"true":void 0),tabindex:k(()=>e.disabled&&t.value?"-1":void 0)})}}const Rn=C({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),Te=Symbol("rippleStop"),Nn=80;function Ye(e,n){e.style.transform=n,e.style.webkitTransform=n}function xe(e){return e.constructor.name==="TouchEvent"}function bt(e){return e.constructor.name==="KeyboardEvent"}const On=function(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!bt(e)){const d=n.getBoundingClientRect(),g=xe(e)?e.touches[e.touches.length-1]:e;t=g.clientX-d.left,s=g.clientY-d.top}let a=0,r=.3;n._ripple?.circle?(r=.15,a=n.clientWidth/2,a=i.center?a:a+Math.sqrt((t-a)**2+(s-a)**2)/4):a=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-a*2)/2}px`,c=`${(n.clientHeight-a*2)/2}px`,u=i.center?o:`${t-a}px`,v=i.center?c:`${s-a}px`;return{radius:a,scale:r,x:u,y:v,centerX:o,centerY:c}},ce={show(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!n?._ripple?.enabled)return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",i.class&&(t.className+=` ${i.class}`);const{radius:a,scale:r,x:o,y:c,centerX:u,centerY:v}=On(e,n,i),d=`${a*2}px`;s.className="v-ripple__animation",s.style.width=d,s.style.height=d,n.appendChild(t);const g=window.getComputedStyle(n);g&&g.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ye(s,`translate(${o}, ${c}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ye(s,`translate(${u}, ${v}) scale3d(1,1,1)`)})})},hide(e){if(!e?._ripple?.enabled)return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const i=Array.from(n).findLast(a=>!a.dataset.isHiding);if(i)i.dataset.isHiding="true";else return;const t=performance.now()-Number(i.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode?.parentNode===e&&e.removeChild(i.parentNode)},300)},s)}};function St(e){return typeof e>"u"||!!e}function K(e){const n={},i=e.currentTarget;if(!(!i?._ripple||i._ripple.touched||e[Te])){if(e[Te]=!0,xe(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(n.center=i._ripple.centered||bt(e),i._ripple.class&&(n.class=i._ripple.class),xe(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{ce.show(e,i,n)},i._ripple.showTimer=window.setTimeout(()=>{i?._ripple?.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)},Nn)}else ce.show(e,i,n)}}function ue(e){e[Te]=!0}function L(e){const n=e.currentTarget;if(n?._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{L(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ce.hide(n)}}function wt(e){const n=e.currentTarget;n?._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let X=!1;function Dn(e,n){!X&&n.includes(e.key)&&(X=!0,K(e))}function kt(e){X=!1,L(e)}function _t(e){X&&(X=!1,L(e))}function Ct(e,n,i){const{value:t,modifiers:s}=n,a=St(t);a||ce.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=s.center,e._ripple.circle=s.circle;const r=we(t)?t:{};r.class&&(e._ripple.class=r.class);const o=r.keys??["Enter","Space"];if(e._ripple.keyDownHandler=c=>Dn(c,o),a&&!i){if(s.stop){e.addEventListener("touchstart",ue,{passive:!0}),e.addEventListener("mousedown",ue);return}e.addEventListener("touchstart",K,{passive:!0}),e.addEventListener("touchend",L,{passive:!0}),e.addEventListener("touchmove",wt,{passive:!0}),e.addEventListener("touchcancel",L),e.addEventListener("mousedown",K),e.addEventListener("mouseup",L),e.addEventListener("mouseleave",L),e.addEventListener("keydown",e._ripple.keyDownHandler),e.addEventListener("keyup",kt),e.addEventListener("blur",_t),e.addEventListener("dragstart",L,{passive:!0})}else!a&&i&&Tt(e)}function Tt(e){e.removeEventListener("touchstart",ue),e.removeEventListener("mousedown",ue),e.removeEventListener("touchstart",K),e.removeEventListener("touchend",L),e.removeEventListener("touchmove",wt),e.removeEventListener("touchcancel",L),e.removeEventListener("mousedown",K),e.removeEventListener("mouseup",L),e.removeEventListener("mouseleave",L),e._ripple?.keyDownHandler&&e.removeEventListener("keydown",e._ripple.keyDownHandler),e.removeEventListener("keyup",kt),e.removeEventListener("blur",_t),e.removeEventListener("dragstart",L)}function zn(e,n){Ct(e,n,!1)}function $n(e){Tt(e),delete e._ripple}function Mn(e,n){if(n.value===n.oldValue)return;const i=St(n.oldValue);Ct(e,n,i)}const Je={mounted:zn,unmounted:$n,updated:Mn},Ee=Symbol.for("vuetify:list");function ca(){let{filterable:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{filterable:!1};const n=me(Ee,{filterable:!1,hasPrepend:B(!1),updateHasPrepend:()=>null}),i={filterable:n.filterable||e,hasPrepend:B(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ge(Ee,i),n}function jn(){return me(Ee,null)}const Ne=e=>{const n={activate:i=>{let{id:t,value:s,activated:a}=i;return t=A(t),e&&!s&&a.size===1&&a.has(t)||(s?a.add(t):a.delete(t)),a},in:(i,t,s)=>{let a=new Set;if(i!=null)for(const r of tt(i))a=n.activate({id:r,value:!0,activated:new Set(a),children:t,parents:s});return a},out:i=>Array.from(i)};return n},xt=e=>{const n=Ne(e);return{activate:t=>{let{activated:s,id:a,...r}=t;a=A(a);const o=s.has(a)?new Set([a]):new Set;return n.activate({...r,id:a,activated:o})},in:(t,s,a)=>{let r=new Set;if(t!=null){const o=tt(t);o.length&&(r=n.in(o.slice(0,1),s,a))}return r},out:(t,s,a)=>n.out(t,s,a)}},Gn=e=>{const n=Ne(e);return{activate:t=>{let{id:s,activated:a,children:r,...o}=t;return s=A(s),r.has(s)?a:n.activate({id:s,activated:a,children:r,...o})},in:n.in,out:n.out}},Hn=e=>{const n=xt(e);return{activate:t=>{let{id:s,activated:a,children:r,...o}=t;return s=A(s),r.has(s)?a:n.activate({id:s,activated:a,children:r,...o})},in:n.in,out:n.out}},qn={open:e=>{let{id:n,value:i,opened:t,parents:s}=e;if(i){const a=new Set;a.add(n);let r=s.get(n);for(;r!=null;)a.add(r),r=s.get(r);return a}else return t.delete(n),t},select:()=>null},Et={open:e=>{let{id:n,value:i,opened:t,parents:s}=e;if(i){let a=s.get(n);for(t.add(n);a!=null&&a!==n;)t.add(a),a=s.get(a);return t}else t.delete(n);return t},select:()=>null},Fn={open:Et.open,select:e=>{let{id:n,value:i,opened:t,parents:s}=e;if(!i)return t;const a=[];let r=s.get(n);for(;r!=null;)a.push(r),r=s.get(r);return new Set(a)}},Oe=e=>{const n={select:i=>{let{id:t,value:s,selected:a}=i;if(t=A(t),e&&!s){const r=Array.from(a.entries()).reduce((o,c)=>{let[u,v]=c;return v==="on"&&o.push(u),o},[]);if(r.length===1&&r[0]===t)return a}return a.set(t,s?"on":"off"),a},in:(i,t,s,a)=>{const r=new Map;for(const o of i||[])n.select({id:o,value:!0,selected:r,children:t,parents:s,disabled:a});return r},out:i=>{const t=[];for(const[s,a]of i.entries())a==="on"&&t.push(s);return t}};return n},At=e=>{const n=Oe(e);return{select:t=>{let{selected:s,id:a,...r}=t;a=A(a);const o=s.has(a)?new Map([[a,s.get(a)]]):new Map;return n.select({...r,id:a,selected:o})},in:(t,s,a,r)=>t?.length?n.in(t.slice(0,1),s,a,r):new Map,out:(t,s,a)=>n.out(t,s,a)}},Wn=e=>{const n=Oe(e);return{select:t=>{let{id:s,selected:a,children:r,...o}=t;return s=A(s),r.has(s)?a:n.select({id:s,selected:a,children:r,...o})},in:n.in,out:n.out}},Un=e=>{const n=At(e);return{select:t=>{let{id:s,selected:a,children:r,...o}=t;return s=A(s),r.has(s)?a:n.select({id:s,selected:a,children:r,...o})},in:n.in,out:n.out}},Pt=e=>{const n={select:i=>{let{id:t,value:s,selected:a,children:r,parents:o,disabled:c}=i;t=A(t);const u=new Map(a),v=[t];for(;v.length;){const g=v.shift();c.has(g)||a.set(A(g),s?"on":"off"),r.has(g)&&v.push(...r.get(g))}let d=A(o.get(t));for(;d;){let g=!0,h=!0;for(const b of r.get(d)){const x=A(b);if(!c.has(x)&&(a.get(x)!=="on"&&(g=!1),a.has(x)&&a.get(x)!=="off"&&(h=!1),!g&&!h))break}a.set(d,g?"on":h?"off":"indeterminate"),d=A(o.get(d))}return e&&!s&&Array.from(a.entries()).reduce((h,b)=>{let[x,$]=b;return $==="on"&&h.push(x),h},[]).length===0?u:a},in:(i,t,s,a)=>{let r=new Map;for(const o of i||[])r=n.select({id:o,value:!0,selected:r,children:t,parents:s,disabled:a});return r},out:(i,t)=>{const s=[];for(const[a,r]of i.entries())r==="on"&&!t.has(a)&&s.push(a);return s}};return n},Yn=e=>{const n=Pt(e);return{select:n.select,in:n.in,out:(t,s,a)=>{const r=[];for(const[o,c]of t.entries())if(c==="on"){if(a.has(o)){const u=a.get(o);if(t.get(u)==="on")continue}r.push(o)}return r}}},Q=Symbol.for("vuetify:nested"),Vt={id:B(),root:{itemsRegistration:V("render"),register:()=>null,unregister:()=>null,children:V(new Map),parents:V(new Map),disabled:V(new Set),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([]),getPath:()=>[]}},ua=C({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean,itemsRegistration:{type:String,default:"render"}},"nested"),da=(e,n,i)=>{let t=!1;const s=B(new Map),a=B(new Map),r=B(new Set),o=ye(e,"opened",e.opened,l=>new Set(Array.isArray(l)?l.map(m=>A(m)):l),l=>[...l.values()]),c=y(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Gn(e.mandatory);case"single-leaf":return Hn(e.mandatory);case"independent":return Ne(e.mandatory);default:return xt(e.mandatory)}}),u=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Un(e.mandatory);case"leaf":return Wn(e.mandatory);case"independent":return Oe(e.mandatory);case"single-independent":return At(e.mandatory);case"trunk":return Yn(e.mandatory);default:return Pt(e.mandatory)}}),v=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Fn;case"single":return qn;default:return Et}}),d=ye(e,"activated",e.activated,l=>c.value.in(l,s.value,a.value),l=>c.value.out(l,s.value,a.value)),g=ye(e,"selected",e.selected,l=>u.value.in(l,s.value,a.value,r.value),l=>u.value.out(l,s.value,a.value));ve(()=>{t=!0});function h(l){const m=[];let f=A(l);for(;f!==void 0;)m.unshift(f),f=a.value.get(f);return m}const b=Z("nested"),x=new Set,$=mn(()=>{J(()=>{s.value=new Map(s.value),a.value=new Map(a.value)})},100);H(()=>[n.value,D(i)],()=>{e.itemsRegistration==="props"&&F()},{immediate:!0});function F(){const l=new Map,m=new Map,f=new Set,p=D(i)?N=>A(N.raw):N=>N.value,O=[...n.value];let W=0;for(;W<O.length;){const N=O[W++],j=p(N);if(N.children){const G=[];for(const S of N.children){const E=p(S);l.set(E,j),G.push(E),O.push(S)}m.set(j,G)}N.props.disabled&&f.add(j)}s.value=m,a.value=l,r.value=f}const P={id:B(),root:{opened:o,activatable:k(()=>e.activatable),selectable:k(()=>e.selectable),activated:d,selected:g,selectedValues:y(()=>{const l=[];for(const[m,f]of g.value.entries())f==="on"&&l.push(m);return l}),itemsRegistration:k(()=>e.itemsRegistration),register:(l,m,f,p)=>{if(x.has(l)){h(l).map(String).join(" -> "),h(m).concat(l).map(String).join(" -> ");return}else x.add(l);m&&l!==m&&a.value.set(l,m),f&&r.value.add(l),p&&s.value.set(l,[]),m!=null&&s.value.set(m,[...s.value.get(m)||[],l]),$()},unregister:l=>{if(t)return;x.delete(l),s.value.delete(l),r.value.delete(l);const m=a.value.get(l);if(m){const f=s.value.get(m)??[];s.value.set(m,f.filter(p=>p!==l))}a.value.delete(l),$()},open:(l,m,f)=>{b.emit("click:open",{id:l,value:m,path:h(l),event:f});const p=v.value.open({id:l,value:m,opened:new Set(o.value),children:s.value,parents:a.value,event:f});p&&(o.value=p)},openOnSelect:(l,m,f)=>{const p=v.value.select({id:l,value:m,selected:new Map(g.value),opened:new Set(o.value),children:s.value,parents:a.value,event:f});p&&(o.value=p)},select:(l,m,f)=>{b.emit("click:select",{id:l,value:m,path:h(l),event:f});const p=u.value.select({id:l,value:m,selected:new Map(g.value),children:s.value,parents:a.value,disabled:r.value,event:f});p&&(g.value=p),P.root.openOnSelect(l,m,f)},activate:(l,m,f)=>{if(!e.activatable)return P.root.select(l,!0,f);b.emit("click:activate",{id:l,value:m,path:h(l),event:f});const p=c.value.activate({id:l,value:m,activated:new Set(d.value),children:s.value,parents:a.value,event:f});if(p.size!==d.value.size)d.value=p;else{for(const O of p)if(!d.value.has(O)){d.value=p;return}for(const O of d.value)if(!p.has(O)){d.value=p;return}}},children:s,parents:a,disabled:r,getPath:h}};return ge(Q,P),P.root},Jn=(e,n,i)=>{const t=me(Q,Vt),s=Symbol("nested item"),a=y(()=>{const o=A(D(e));return o!==void 0?o:s}),r={...t,id:a,open:(o,c)=>t.root.open(a.value,o,c),openOnSelect:(o,c)=>t.root.openOnSelect(a.value,o,c),isOpen:y(()=>t.root.opened.value.has(a.value)),parent:y(()=>t.root.parents.value.get(a.value)),activate:(o,c)=>t.root.activate(a.value,o,c),isActivated:y(()=>t.root.activated.value.has(a.value)),select:(o,c)=>t.root.select(a.value,o,c),isSelected:y(()=>t.root.selected.value.get(a.value)==="on"),isIndeterminate:y(()=>t.root.selected.value.get(a.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(a.value)),isGroupActivator:t.isGroupActivator};return Ve(()=>{t.isGroupActivator||t.root.itemsRegistration.value==="props"||J(()=>{t.root.register(a.value,t.id.value,D(n),i)})}),ve(()=>{t.isGroupActivator||t.root.itemsRegistration.value==="props"||t.root.unregister(a.value)}),H(a,(o,c)=>{t.isGroupActivator||t.root.itemsRegistration.value==="props"||(t.root.unregister(c),J(()=>{t.root.register(o,t.id.value,D(n),i)}))}),i&&ge(Q,r),r},va=()=>{const e=me(Q,Vt);ge(Q,{...e,isGroupActivator:!0})},Kn=C({opacity:[Number,String],...q(),...fe()},"VListItemSubtitle"),Xn=z()({name:"VListItemSubtitle",props:Kn(),setup(e,n){let{slots:i}=n;return U(()=>w(e.tag,{class:M(["v-list-item-subtitle",e.class]),style:Y([{"--v-list-item-subtitle-opacity":e.opacity},e.style])},i)),{}}}),Qn=un("v-list-item-title"),Zn=C({start:Boolean,end:Boolean,icon:le,image:String,text:String,...ut(),...q(),...vt(),...Le(),...pt(),...fe(),...Be(),...ft({variant:"flat"})},"VAvatar"),Ke=z()({name:"VAvatar",props:Zn(),setup(e,n){let{slots:i}=n;const{themeClasses:t}=nt(e),{borderClasses:s}=dt(e),{colorClasses:a,colorStyles:r,variantClasses:o}=ht(e),{densityClasses:c}=mt(e),{roundedClasses:u}=Re(e),{sizeClasses:v,sizeStyles:d}=yt(e);return U(()=>w(e.tag,{class:M(["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,a.value,c.value,u.value,v.value,o.value,e.class]),style:Y([r.value,d.value,e.style])},{default:()=>[i.default?w(_e,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[i.default()]}):e.image?w(Tn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?w(Ce,{key:"icon",icon:e.icon},null):e.text,gt(!1,"v-avatar")]})),{}}}),ea=C({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:le,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:le,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,prependGap:[Number,String],subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},value:null,onClick:He(),onClickOnce:He(),...ut(),...q(),...vt(),...rt(),...xn(),...Le(),...Rn(),...fe(),...Be(),...ft({variant:"text"})},"VListItem"),ma=z()({name:"VListItem",directives:{vRipple:Je},props:ea(),emits:{click:e=>!0},setup(e,n){let{attrs:i,slots:t,emit:s}=n;const a=Ln(e,i),r=y(()=>e.value===void 0?a.href.value:e.value),{activate:o,isActivated:c,select:u,isOpen:v,isSelected:d,isIndeterminate:g,isGroupActivator:h,root:b,parent:x,openOnSelect:$,id:F}=Jn(r,()=>e.disabled,!1),P=jn(),l=y(()=>e.active!==!1&&(e.active||a.isActive?.value||(b.activatable.value?c.value:d.value))),m=k(()=>e.link!==!1&&a.isLink.value),f=y(()=>!!P&&(b.selectable.value||b.activatable.value||e.value!=null)),p=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||f.value)),O=y(()=>P?m.value?"link":f.value?"option":"listitem":void 0),W=y(()=>{if(f.value)return b.activatable.value?c.value:b.selectable.value?d.value:l.value}),N=k(()=>e.rounded||e.nav),j=k(()=>e.color??e.activeColor),G=k(()=>({color:l.value?j.value??e.baseColor:e.baseColor,variant:e.variant}));H(()=>a.isActive?.value,T=>{T&&S()}),Ve(()=>{a.isActive?.value&&J(()=>S())});function S(){x.value!=null&&b.open(x.value,!0),$(!0)}const{themeClasses:E}=nt(e),{borderClasses:te}=dt(e),{colorClasses:ne,colorStyles:ae,variantClasses:Bt}=ht(G),{densityClasses:It}=mt(e),{dimensionStyles:Lt}=ot(e),{elevationClasses:Rt}=En(e),{roundedClasses:Nt}=Re(N),Ot=k(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Dt=k(()=>e.ripple!==void 0&&e.ripple&&P?.filterable?{keys:["Enter"]}:e.ripple),he=y(()=>({isActive:l.value,select:u,isOpen:v.value,isSelected:d.value,isIndeterminate:g.value}));function zt(T){s("click",T),!["INPUT","TEXTAREA"].includes(T.target?.tagName)&&p.value&&(a.navigate?.(T),!h&&(b.activatable.value?o(!c.value,T):(b.selectable.value||e.value!=null&&!m.value)&&u(!d.value,T)))}function $t(T){const pe=T.target;["INPUT","TEXTAREA"].includes(pe.tagName)||(T.key==="Enter"||T.key===" "&&!P?.filterable)&&(T.preventDefault(),T.stopPropagation(),T.target.dispatchEvent(new MouseEvent("click",T)))}return U(()=>{const T=m.value?"a":e.tag,pe=t.title||e.title!=null,Mt=t.subtitle||e.subtitle!=null,De=!!(e.appendAvatar||e.appendIcon),jt=!!(De||t.append),ze=!!(e.prependAvatar||e.prependIcon),$e=!!(ze||t.prepend);return P?.updateHasPrepend($e),e.activeColor&&on("active-color",["color","base-color"]),ke(w(T,re(a.linkProps,{class:["v-list-item",{"v-list-item--active":l.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&l.value},E.value,te.value,ne.value,It.value,Rt.value,Ot.value,Nt.value,Bt.value,e.class],style:[{"--v-list-prepend-gap":I(e.prependGap)},ae.value,Lt.value,e.style],tabindex:p.value?P?-2:0:void 0,"aria-selected":W.value,role:O.value,onClick:zt,onKeydown:p.value&&!m.value&&$t}),{default:()=>[gt(p.value||l.value,"v-list-item"),$e&&_("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?w(_e,{key:"prepend-defaults",disabled:!ze,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[t.prepend?.(he.value)]}):_(oe,null,[e.prependAvatar&&w(Ke,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&w(Ce,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),_("div",{class:"v-list-item__spacer"},null)]),_("div",{class:"v-list-item__content","data-no-activator":""},[pe&&w(Qn,{key:"title"},{default:()=>[t.title?.({title:e.title})??qe(e.title)]}),Mt&&w(Xn,{key:"subtitle"},{default:()=>[t.subtitle?.({subtitle:e.subtitle})??qe(e.subtitle)]}),t.default?.(he.value)]),jt&&_("div",{key:"append",class:"v-list-item__append"},[t.append?w(_e,{key:"append-defaults",disabled:!De,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[t.append?.(he.value)]}):_(oe,null,[e.appendIcon&&w(Ce,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&w(Ke,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),_("div",{class:"v-list-item__spacer"},null)])]}),[[Je,p.value&&Dt.value]])}),{activate:o,isActivated:c,isGroupActivator:h,isSelected:d,list:P,select:u,root:b,id:F,link:a}}});export{Q as A,va as B,ca as C,mt as D,da as E,ft as F,ia as G,vt as H,ua as I,Ke as J,ht as K,Ln as L,ie as M,Rn as N,gt as O,Qn as P,We as Q,Je as R,Tn as V,q as a,U as b,Sn as c,dt as d,En as e,Re as f,Le as g,xn as h,ut as i,_e as j,ra as k,oa as l,fe as m,un as n,sa as o,Ce as p,ot as q,rt as r,la as s,Fe as t,aa as u,ma as v,na as w,bn as x,Jn as y,jn as z};
