import{af as me,p as k,m as N,$ as It,ag as We,Z as ne,g as W,ah as Lt,r as x,ai as Se,T as we,aj as Nt,y as Rt,c as h,d as P,n as m,ak as z,al as Ue,am as Re,an as Ot,ao as Dt,ap as $t,Y as U,C as ke,X as Ye,u as j,s as L,w as Q,aq as _e,U as zt,o as Ce,a2 as he,ab as Je,S as ee,a3 as jt,e as Gt,a as qt,L as Oe,a1 as te,q as Te,v as xe,ar as Mt,as as Ht,at as Ft,au as Wt,av as De,b as $e,aw as Ut,ax as Yt,ay as ze,i as ie,f as se,az as _,aA as Ke,h as Jt,A as ve,a4 as je,aB as Kt}from"./index-67064a19.js";const Xt=["top","bottom"],Zt=["start","end","left","right"];function Ma(e,n){let[a,t]=e.split(" ");return t||(t=me(Xt,a)?"start":me(Zt,a)?"top":"center"),{side:Ge(a,n),align:Ge(t,n)}}function Ge(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const D=k({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Qt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return N()({name:a??It(We(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...D()},setup(t,s){let{slots:i}=s;return()=>{var r;return ne(t.tag,{class:[e,t.class],style:t.style},(r=i.default)==null?void 0:r.call(i))}}})}function G(e){const n=W("useRender");n.render=e}const Ha=[{title:"admin.sc-voice.net",summary:"Voice administration website",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",admin:!0,text:`
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
  `,github:"dhammaregen/dhammaregen"}].map((e,n)=>(e.value=n,e)),ea=[{name:"www.api.sc-voice.net",url:"https://www.api.sc-voice.net",title:"Default language server; SuttaCentral gateway"},{name:"pli.api.sc-voice.net",url:"https://pli.api.sc-voice.net",title:"Pali server (pli)"},{name:"s1.sc-voice.net",url:"https://s1.sc-voice.net",title:"Legacy scv-server"}],ta=[{title:"Glossary",icon:"mdi-file-word-box",value:""},{title:"SuttaCentral Voice",icon:"mdi-account-voice",value:"voice"},{title:"Administration",icon:"mdi-shield-crown",value:"admin"},{title:"Voice API Servers",icon:"mdi-server",value:"api"},{title:"Software Libraries",icon:"mdi-library",value:"library"}],Fa=Lt("app",{state:()=>({servers:ea,filters:ta,filter:x(""),itemIndex:x(0)}),actions:{setItemIndex(e){this.itemIndex=e}}}),re=k({tag:{type:String,default:"div"}},"tag"),aa=k({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function E(e,n,a){return N()({name:e,props:aa({mode:a,origin:n}),setup(t,s){let{slots:i}=s;const r={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:v,offsetLeft:u,offsetWidth:c,offsetHeight:d}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${v}px`,o.style.left=`${u}px`,o.style.width=`${c}px`,o.style.height=`${d}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:v,top:u,left:c,width:d,height:p}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=v||"",o.style.top=u||"",o.style.left=c||"",o.style.width=d||"",o.style.height=p||""}}};return()=>{const o=t.group?Se:we;return ne(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},i.default)}}})}function Xe(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return N()({name:e,props:{mode:{type:String,default:a},disabled:Boolean,group:Boolean},setup(t,s){let{slots:i}=s;const r=t.group?Se:we;return()=>ne(r,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},i.default)}})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=We(`offset-${a}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[a]:r.style[a]}},onEnter(r){const o=r._initialStyle;if(!o)return;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const v=`${r[t]}px`;r.style[a]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[a]=v})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[a]:r.style[a]},r.style.overflow="hidden",r.style[a]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[a]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){if(!r._initialStyle)return;const o=r._initialStyle[a];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[a]=o),delete r._initialStyle}}E("fab-transition","center center","out-in");E("dialog-bottom-transition");E("dialog-top-transition");E("fade-transition");E("scale-transition");E("scroll-x-transition");E("scroll-x-reverse-transition");E("scroll-y-transition");E("scroll-y-reverse-transition");E("slide-x-transition");E("slide-x-reverse-transition");E("slide-y-transition");E("slide-y-reverse-transition");const Wa=Xe("expand-transition",Ze());Xe("expand-x-transition",Ze("",!0));const na=k({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ge=N(!1)({name:"VDefaultsProvider",props:na(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:i,root:r,scoped:o}=Nt(e);return Rt(t,{reset:i,root:r,scoped:o,disabled:s}),()=>{var v;return(v=a.default)==null?void 0:v.call(a)}}});const Qe=k({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function et(e){return{dimensionStyles:h(()=>{const a={},t=P(e.height),s=P(e.maxHeight),i=P(e.maxWidth),r=P(e.minHeight),o=P(e.minWidth),v=P(e.width);return t!=null&&(a.height=t),s!=null&&(a.maxHeight=s),i!=null&&(a.maxWidth=i),r!=null&&(a.minHeight=r),o!=null&&(a.minWidth=o),v!=null&&(a.width=v),a})}}function ia(e){return{aspectStyles:h(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const tt=k({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...D(),...Qe()},"VResponsive"),qe=N()({name:"VResponsive",props:tt(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=ia(e),{dimensionStyles:s}=et(e);return G(()=>{var i;return m("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[m("div",{class:"v-responsive__sizer",style:t.value},null),(i=a.additional)==null?void 0:i.call(a),a.default&&m("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Ae(e){return Ue(()=>{const n=[],a={};if(e.value.background)if(Re(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&Ot(e.value.background)){const t=Dt(e.value.background);if(t.a==null||t.a===1){const s=$t(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(Re(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function sa(e,n){const a=h(()=>({text:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=Ae(a);return{textColorClasses:t,textColorStyles:s}}function ra(e,n){const a=h(()=>({background:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=Ae(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Ee=k({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Pe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U();return{roundedClasses:h(()=>{const t=z(e)?e.value:e.rounded,s=z(e)?e.value:e.tile,i=[];if(t===!0||t==="")i.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))i.push(`rounded-${r}`);else(s||t===!1)&&i.push("rounded-0");return i})}}const oa=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Z=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:i,...r}=e,{component:o=i?Se:we,...v}=typeof t=="object"?t:{};return ne(o,ke(typeof t=="string"?{name:s?"":t}:v,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:i}).filter(u=>{let[c,d]=u;return d!==void 0})),r),a)};function la(e,n){if(!Ye)return;const a=n.modifiers||{},t=n.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var d;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const u=(d=e._observe)==null?void 0:d[n.instance.$.uid];if(!u)return;const c=o.some(p=>p.isIntersecting);s&&(!a.quiet||u.init)&&(!a.once||c||u.init)&&s(c,o,v),c&&a.once?at(e,n):u.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function at(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const ca={mounted:la,unmounted:at},ua=ca,da=k({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...tt(),...D(),...Ee(),...oa()},"VImg"),va=N()({name:"VImg",directives:{intersect:ua},props:da(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:i}=ra(j(e,"color")),{roundedClasses:r}=Pe(e),o=W("VImg"),v=L(""),u=x(),c=L(e.eager?"loading":"idle"),d=L(),p=L(),g=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),l=h(()=>g.value.aspect||d.value/p.value||0);Q(()=>e.src,()=>{f(c.value!=="idle")}),Q(l,(b,C)=>{!b&&C&&u.value&&R(u.value)}),_e(()=>f());function f(b){if(!(e.eager&&b)&&!(Ye&&!b&&!e.eager)){if(c.value="loading",g.value.lazySrc){const C=new Image;C.src=g.value.lazySrc,R(C,null)}g.value.src&&zt(()=>{var C;a("loadstart",((C=u.value)==null?void 0:C.currentSrc)||g.value.src),setTimeout(()=>{var I;if(!o.isUnmounted)if((I=u.value)!=null&&I.complete){if(u.value.naturalWidth||w(),c.value==="error")return;l.value||R(u.value,null),c.value==="loading"&&y()}else l.value||R(u.value),T()})})}}function y(){var b;o.isUnmounted||(T(),R(u.value),c.value="loaded",a("load",((b=u.value)==null?void 0:b.currentSrc)||g.value.src))}function w(){var b;o.isUnmounted||(c.value="error",a("error",((b=u.value)==null?void 0:b.currentSrc)||g.value.src))}function T(){const b=u.value;b&&(v.value=b.currentSrc||b.src)}let B=-1;Ce(()=>{clearTimeout(B)});function R(b){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{if(clearTimeout(B),o.isUnmounted)return;const{naturalHeight:K,naturalWidth:X}=b;K||X?(d.value=X,p.value=K):!b.complete&&c.value==="loading"&&C!=null?B=window.setTimeout(I,C):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,p.value=1)};I()}const q=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var I;if(!g.value.src||c.value==="idle")return null;const b=m("img",{class:["v-img__img",q.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.src,srcset:g.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:y,onError:w},null),C=(I=t.sources)==null?void 0:I.call(t);return m(Z,{transition:e.transition,appear:!0},{default:()=>[he(C?m("picture",{class:"v-img__picture"},[C,b]):b,[[jt,c.value==="loaded"]])]})},oe=()=>m(Z,{transition:e.transition},{default:()=>[g.value.lazySrc&&c.value!=="loaded"&&m("img",{class:["v-img__img","v-img__img--preload",q.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),le=()=>t.placeholder?m(Z,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!t.error)&&m("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ce=()=>t.error?m(Z,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&m("div",{class:"v-img__error"},[t.error()])]}):null,Y=()=>e.gradient?m("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,J=L(!1);{const b=Q(l,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{J.value=!0})}),b())})}return G(()=>{const b=qe.filterProps(e);return he(m(qe,ke({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!J.value},s.value,r.value,e.class],style:[{width:P(e.width==="auto"?d.value:e.width)},i.value,e.style]},b,{aspectRatio:l.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>m(ee,null,[m(O,null,null),m(oe,null,null),m(Y,null,null),m(le,null,null),m(ce,null,null)]),default:t.default}),[[Je("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:u,state:c,naturalWidth:d,naturalHeight:p}}}),nt=k({border:[Boolean,Number,String]},"border");function it(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U();return{borderClasses:h(()=>{const t=z(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const ma=k({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function ha(e){return{elevationClasses:h(()=>{const a=z(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}function Ua(){const e=L(!1);return Gt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:qt(e)}}const ga=[null,"default","comfortable","compact"],st=k({density:{type:String,default:"default",validator:e=>ga.includes(e)}},"density");function rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U();return{densityClasses:h(()=>`${n}--density-${e.density}`)}}const fa=["elevated","flat","tonal","outlined","text","plain"];function ot(e,n){return m(ee,null,[e&&m("span",{key:"overlay",class:`${n}__overlay`},null),m("span",{key:"underlay",class:`${n}__underlay`},null)])}const lt=k({color:String,variant:{type:String,default:"elevated",validator:e=>fa.includes(e)}},"variant");function ct(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U();const a=h(()=>{const{variant:i}=Oe(e);return`${n}--variant-${i}`}),{colorClasses:t,colorStyles:s}=Ae(h(()=>{const{variant:i,color:r}=Oe(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const pa=["x-small","small","default","large","x-large"],ut=k({size:{type:[String,Number],default:"default"}},"size");function dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U();return Ue(()=>{let a,t;return me(pa,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:P(e.size),height:P(e.size)}),{sizeClasses:a,sizeStyles:t}})}const ya=k({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:te,...D(),...ut(),...re({tag:"i"}),...Te()},"VIcon"),fe=N()({name:"VIcon",props:ya(),setup(e,n){let{attrs:a,slots:t}=n;const s=x(),{themeClasses:i}=xe(e),{iconData:r}=Mt(h(()=>s.value||e.icon)),{sizeClasses:o}=dt(e),{textColorClasses:v,textColorStyles:u}=sa(j(e,"color"));return G(()=>{var p,g;const c=(p=t.default)==null?void 0:p.call(t);c&&(s.value=(g=Ht(c).filter(l=>l.type===Ft&&l.children&&typeof l.children=="string")[0])==null?void 0:g.children);const d=!!(a.onClick||a.onClickOnce);return m(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,v.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:P(e.size),height:P(e.size),width:P(e.size)},u.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[c]})}),{}}});function ba(){const e=W("useRoute");return h(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function Ya(){var e,n;return(n=(e=W("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Sa(e,n){var d,p;const a=Wt("RouterLink"),t=h(()=>!!(e.href||e.to)),s=h(()=>(t==null?void 0:t.value)||De(n,"click")||De(e,"click"));if(typeof a=="string"||!("useLink"in a)){const g=j(e,"href");return{isLink:t,isClickable:s,href:g,linkProps:$e({href:g})}}const i=h(()=>({...e,to:j(()=>e.to||"")})),r=a.useLink(i.value),o=h(()=>e.to?r:void 0),v=ba(),u=h(()=>{var g,l,f;return o.value?e.exact?v.value?((f=o.value.isExactActive)==null?void 0:f.value)&&Ut(o.value.route.value.query,v.value.query):((l=o.value.isExactActive)==null?void 0:l.value)??!1:((g=o.value.isActive)==null?void 0:g.value)??!1:!1}),c=h(()=>{var g;return e.to?(g=o.value)==null?void 0:g.route.value.href:e.href});return{isLink:t,isClickable:s,isActive:u,route:(d=o.value)==null?void 0:d.route,navigate:(p=o.value)==null?void 0:p.navigate,href:c,linkProps:$e({href:c,"aria-current":h(()=>u.value?"page":void 0)})}}const wa=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const pe=Symbol("rippleStop"),ka=80;function Me(e,n){e.style.transform=n,e.style.webkitTransform=n}function ye(e){return e.constructor.name==="TouchEvent"}function vt(e){return e.constructor.name==="KeyboardEvent"}const _a=function(e,n){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!vt(e)){const p=n.getBoundingClientRect(),g=ye(e)?e.touches[e.touches.length-1]:e;t=g.clientX-p.left,s=g.clientY-p.top}let i=0,r=.3;(d=n._ripple)!=null&&d.circle?(r=.15,i=n.clientWidth/2,i=a.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,v=`${(n.clientHeight-i*2)/2}px`,u=a.center?o:`${t-i}px`,c=a.center?v:`${s-i}px`;return{radius:i,scale:r,x:u,y:c,centerX:o,centerY:v}},ae={show(e,n){var g;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=n==null?void 0:n._ripple)!=null&&g.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:i,scale:r,x:o,y:v,centerX:u,centerY:c}=_a(e,n,a),d=`${i*2}px`;s.className="v-ripple__animation",s.style.width=d,s.style.height=d,n.appendChild(t);const p=window.getComputedStyle(n);p&&p.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Me(s,`translate(${o}, ${v}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Me(s,`translate(${u}, ${c}) scale3d(1,1,1)`)})})},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=a.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function mt(e){return typeof e>"u"||!!e}function M(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[pe])){if(e[pe]=!0,ye(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||vt(e),a._ripple.class&&(n.class=a._ripple.class),ye(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{ae.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},ka)}else ae.show(e,a,n)}}function He(e){e[pe]=!0}function A(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{A(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ae.hide(n)}}function ht(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let H=!1;function gt(e){!H&&(e.keyCode===ze.enter||e.keyCode===ze.space)&&(H=!0,M(e))}function ft(e){H=!1,A(e)}function pt(e){H&&(H=!1,A(e))}function yt(e,n,a){const{value:t,modifiers:s}=n,i=mt(t);if(i||ae.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Yt(t)&&t.class&&(e._ripple.class=t.class),i&&!a){if(s.stop){e.addEventListener("touchstart",He,{passive:!0}),e.addEventListener("mousedown",He);return}e.addEventListener("touchstart",M,{passive:!0}),e.addEventListener("touchend",A,{passive:!0}),e.addEventListener("touchmove",ht,{passive:!0}),e.addEventListener("touchcancel",A),e.addEventListener("mousedown",M),e.addEventListener("mouseup",A),e.addEventListener("mouseleave",A),e.addEventListener("keydown",gt),e.addEventListener("keyup",ft),e.addEventListener("blur",pt),e.addEventListener("dragstart",A,{passive:!0})}else!i&&a&&bt(e)}function bt(e){e.removeEventListener("mousedown",M),e.removeEventListener("touchstart",M),e.removeEventListener("touchend",A),e.removeEventListener("touchmove",ht),e.removeEventListener("touchcancel",A),e.removeEventListener("mouseup",A),e.removeEventListener("mouseleave",A),e.removeEventListener("keydown",gt),e.removeEventListener("keyup",ft),e.removeEventListener("dragstart",A),e.removeEventListener("blur",pt)}function Ca(e,n){yt(e,n,!1)}function Ta(e){delete e._ripple,bt(e)}function xa(e,n){if(n.value===n.oldValue)return;const a=mt(n.oldValue);yt(e,n,a)}const Aa={mounted:Ca,unmounted:Ta,updated:xa};const be=Symbol.for("vuetify:list");function Ja(){const e=ie(be,{hasPrepend:L(!1),updateHasPrepend:()=>null}),n={hasPrepend:L(!1),updateHasPrepend:a=>{a&&(n.hasPrepend.value=a)}};return se(be,n),e}function Ea(){return ie(be,null)}const Ve=e=>{const n={activate:a=>{let{id:t,value:s,activated:i}=a;return t=_(t),e&&!s&&i.size===1&&i.has(t)||(s?i.add(t):i.delete(t)),i},in:(a,t,s)=>{let i=new Set;if(a!=null)for(const r of Ke(a))i=n.activate({id:r,value:!0,activated:new Set(i),children:t,parents:s});return i},out:a=>Array.from(a)};return n},St=e=>{const n=Ve(e);return{activate:t=>{let{activated:s,id:i,...r}=t;i=_(i);const o=s.has(i)?new Set([i]):new Set;return n.activate({...r,id:i,activated:o})},in:(t,s,i)=>{let r=new Set;if(t!=null){const o=Ke(t);o.length&&(r=n.in(o.slice(0,1),s,i))}return r},out:(t,s,i)=>n.out(t,s,i)}},Pa=e=>{const n=Ve(e);return{activate:t=>{let{id:s,activated:i,children:r,...o}=t;return s=_(s),r.has(s)?i:n.activate({id:s,activated:i,children:r,...o})},in:n.in,out:n.out}},Va=e=>{const n=St(e);return{activate:t=>{let{id:s,activated:i,children:r,...o}=t;return s=_(s),r.has(s)?i:n.activate({id:s,activated:i,children:r,...o})},in:n.in,out:n.out}},Ba={open:e=>{let{id:n,value:a,opened:t,parents:s}=e;if(a){const i=new Set;i.add(n);let r=s.get(n);for(;r!=null;)i.add(r),r=s.get(r);return i}else return t.delete(n),t},select:()=>null},wt={open:e=>{let{id:n,value:a,opened:t,parents:s}=e;if(a){let i=s.get(n);for(t.add(n);i!=null&&i!==n;)t.add(i),i=s.get(i);return t}else t.delete(n);return t},select:()=>null},Ia={open:wt.open,select:e=>{let{id:n,value:a,opened:t,parents:s}=e;if(!a)return t;const i=[];let r=s.get(n);for(;r!=null;)i.push(r),r=s.get(r);return new Set(i)}},Be=e=>{const n={select:a=>{let{id:t,value:s,selected:i}=a;if(t=_(t),e&&!s){const r=Array.from(i.entries()).reduce((o,v)=>{let[u,c]=v;return c==="on"&&o.push(u),o},[]);if(r.length===1&&r[0]===t)return i}return i.set(t,s?"on":"off"),i},in:(a,t,s)=>{const i=new Map;for(const r of a||[])n.select({id:r,value:!0,selected:i,children:t,parents:s});return i},out:a=>{const t=[];for(const[s,i]of a.entries())i==="on"&&t.push(s);return t}};return n},kt=e=>{const n=Be(e);return{select:t=>{let{selected:s,id:i,...r}=t;i=_(i);const o=s.has(i)?new Map([[i,s.get(i)]]):new Map;return n.select({...r,id:i,selected:o})},in:(t,s,i)=>t!=null&&t.length?n.in(t.slice(0,1),s,i):new Map,out:(t,s,i)=>n.out(t,s,i)}},La=e=>{const n=Be(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=_(s),r.has(s)?i:n.select({id:s,selected:i,children:r,...o})},in:n.in,out:n.out}},Na=e=>{const n=kt(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=_(s),r.has(s)?i:n.select({id:s,selected:i,children:r,...o})},in:n.in,out:n.out}},Ra=e=>{const n={select:a=>{let{id:t,value:s,selected:i,children:r,parents:o}=a;t=_(t);const v=new Map(i),u=[t];for(;u.length;){const d=u.shift();i.set(_(d),s?"on":"off"),r.has(d)&&u.push(...r.get(d))}let c=_(o.get(t));for(;c;){const d=r.get(c),p=d.every(l=>i.get(_(l))==="on"),g=d.every(l=>!i.has(_(l))||i.get(_(l))==="off");i.set(c,p?"on":g?"off":"indeterminate"),c=_(o.get(c))}return e&&!s&&Array.from(i.entries()).reduce((p,g)=>{let[l,f]=g;return f==="on"&&p.push(l),p},[]).length===0?v:i},in:(a,t,s)=>{let i=new Map;for(const r of a||[])i=n.select({id:r,value:!0,selected:i,children:t,parents:s});return i},out:(a,t)=>{const s=[];for(const[i,r]of a.entries())r==="on"&&!t.has(i)&&s.push(i);return s}};return n},F=Symbol.for("vuetify:nested"),_t={id:L(),root:{register:()=>null,unregister:()=>null,parents:x(new Map),children:x(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:x(!1),selectable:x(!1),opened:x(new Set),activated:x(new Set),selected:x(new Map),selectedValues:x([]),getPath:()=>[]}},Ka=k({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Xa=e=>{let n=!1;const a=x(new Map),t=x(new Map),s=ve(e,"opened",e.opened,l=>new Set(l),l=>[...l.values()]),i=h(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Pa(e.mandatory);case"single-leaf":return Va(e.mandatory);case"independent":return Ve(e.mandatory);case"single-independent":default:return St(e.mandatory)}}),r=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Na(e.mandatory);case"leaf":return La(e.mandatory);case"independent":return Be(e.mandatory);case"single-independent":return kt(e.mandatory);case"classic":default:return Ra(e.mandatory)}}),o=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ia;case"single":return Ba;case"multiple":default:return wt}}),v=ve(e,"activated",e.activated,l=>i.value.in(l,a.value,t.value),l=>i.value.out(l,a.value,t.value)),u=ve(e,"selected",e.selected,l=>r.value.in(l,a.value,t.value),l=>r.value.out(l,a.value,t.value));Ce(()=>{n=!0});function c(l){const f=[];let y=l;for(;y!=null;)f.unshift(y),y=t.value.get(y);return f}const d=W("nested"),p=new Set,g={id:L(),root:{opened:s,activatable:j(e,"activatable"),selectable:j(e,"selectable"),activated:v,selected:u,selectedValues:h(()=>{const l=[];for(const[f,y]of u.value.entries())y==="on"&&l.push(f);return l}),register:(l,f,y)=>{if(p.has(l)){c(l).map(String).join(" -> "),c(f).concat(l).map(String).join(" -> ");return}else p.add(l);f&&l!==f&&t.value.set(l,f),y&&a.value.set(l,[]),f!=null&&a.value.set(f,[...a.value.get(f)||[],l])},unregister:l=>{if(n)return;p.delete(l),a.value.delete(l);const f=t.value.get(l);if(f){const y=a.value.get(f)??[];a.value.set(f,y.filter(w=>w!==l))}t.value.delete(l)},open:(l,f,y)=>{d.emit("click:open",{id:l,value:f,path:c(l),event:y});const w=o.value.open({id:l,value:f,opened:new Set(s.value),children:a.value,parents:t.value,event:y});w&&(s.value=w)},openOnSelect:(l,f,y)=>{const w=o.value.select({id:l,value:f,selected:new Map(u.value),opened:new Set(s.value),children:a.value,parents:t.value,event:y});w&&(s.value=w)},select:(l,f,y)=>{d.emit("click:select",{id:l,value:f,path:c(l),event:y});const w=r.value.select({id:l,value:f,selected:new Map(u.value),children:a.value,parents:t.value,event:y});w&&(u.value=w),g.root.openOnSelect(l,f,y)},activate:(l,f,y)=>{if(!e.activatable)return g.root.select(l,!0,y);d.emit("click:activate",{id:l,value:f,path:c(l),event:y});const w=i.value.activate({id:l,value:f,activated:new Set(v.value),children:a.value,parents:t.value,event:y});if(w.size!==v.value.size)v.value=w;else{for(const T of w)if(!v.value.has(T)){v.value=w;return}for(const T of v.value)if(!w.has(T)){v.value=w;return}}},children:a,parents:t,getPath:c}};return se(F,g),g.root},Oa=(e,n)=>{const a=ie(F,_t),t=Symbol(Jt()),s=h(()=>e.value!==void 0?e.value:t),i={...a,id:s,open:(r,o)=>a.root.open(s.value,r,o),openOnSelect:(r,o)=>a.root.openOnSelect(s.value,r,o),isOpen:h(()=>a.root.opened.value.has(s.value)),parent:h(()=>a.root.parents.value.get(s.value)),activate:(r,o)=>a.root.activate(s.value,r,o),isActivated:h(()=>a.root.activated.value.has(_(s.value))),select:(r,o)=>a.root.select(s.value,r,o),isSelected:h(()=>a.root.selected.value.get(_(s.value))==="on"),isIndeterminate:h(()=>a.root.selected.value.get(_(s.value))==="indeterminate"),isLeaf:h(()=>!a.root.children.value.get(s.value)),isGroupActivator:a.isGroupActivator};return _e(()=>{!a.isGroupActivator&&a.root.register(s.value,a.id.value,n)}),Ce(()=>{!a.isGroupActivator&&a.root.unregister(s.value)}),n&&se(F,i),i},Za=()=>{const e=ie(F,_t);se(F,{...e,isGroupActivator:!0})};const Da=k({opacity:[Number,String],...D(),...re()},"VListItemSubtitle"),$a=N()({name:"VListItemSubtitle",props:Da(),setup(e,n){let{slots:a}=n;return G(()=>m(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),za=Qt("v-list-item-title");const ja=k({start:Boolean,end:Boolean,icon:te,image:String,text:String,...nt(),...D(),...st(),...Ee(),...ut(),...re(),...Te(),...lt({variant:"flat"})},"VAvatar"),Fe=N()({name:"VAvatar",props:ja(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=xe(e),{borderClasses:s}=it(e),{colorClasses:i,colorStyles:r,variantClasses:o}=ct(e),{densityClasses:v}=rt(e),{roundedClasses:u}=Pe(e),{sizeClasses:c,sizeStyles:d}=dt(e);return G(()=>m(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,i.value,v.value,u.value,c.value,o.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[a.default?m(ge,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?m(va,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?m(fe,{key:"icon",icon:e.icon},null):e.text,ot(!1,"v-avatar")]})),{}}}),Ga=k({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:te,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:je(),onClickOnce:je(),...nt(),...D(),...st(),...Qe(),...ma(),...Ee(),...wa(),...re(),...Te(),...lt({variant:"text"})},"VListItem"),Qa=N()({name:"VListItem",directives:{Ripple:Aa},props:Ga(),emits:{click:e=>!0},setup(e,n){let{attrs:a,slots:t,emit:s}=n;const i=Sa(e,a),r=h(()=>e.value===void 0?i.href.value:e.value),{activate:o,isActivated:v,select:u,isOpen:c,isSelected:d,isIndeterminate:p,isGroupActivator:g,root:l,parent:f,openOnSelect:y,id:w}=Oa(r,!1),T=Ea(),B=h(()=>{var S;return e.active!==!1&&(e.active||((S=i.isActive)==null?void 0:S.value)||(l.activatable.value?v.value:d.value))}),R=h(()=>e.link!==!1&&i.isLink.value),q=h(()=>!!T&&(l.selectable.value||l.activatable.value||e.value!=null)),O=h(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||q.value)),oe=h(()=>e.rounded||e.nav),le=h(()=>e.color??e.activeColor),ce=h(()=>({color:B.value?le.value??e.baseColor:e.baseColor,variant:e.variant}));Q(()=>{var S;return(S=i.isActive)==null?void 0:S.value},S=>{S&&Y()}),_e(()=>{var S;(S=i.isActive)!=null&&S.value&&Y()});function Y(){f.value!=null&&l.open(f.value,!0),y(!0)}const{themeClasses:J}=xe(e),{borderClasses:b}=it(e),{colorClasses:C,colorStyles:I,variantClasses:K}=ct(ce),{densityClasses:X}=rt(e),{dimensionStyles:Ct}=et(e),{elevationClasses:Tt}=ha(e),{roundedClasses:xt}=Pe(oe),At=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ue=h(()=>({isActive:B.value,select:u,isOpen:c.value,isSelected:d.value,isIndeterminate:p.value}));function Et(S){var $;s("click",S),O.value&&(($=i.navigate)==null||$.call(i,S),!g&&(l.activatable.value?o(!v.value,S):(l.selectable.value||e.value!=null)&&u(!d.value,S)))}function Pt(S){const $=S.target;["INPUT","TEXTAREA"].includes($.tagName)||(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),S.target.dispatchEvent(new MouseEvent("click",S)))}return G(()=>{const S=R.value?"a":e.tag,$=t.title||e.title!=null,Vt=t.subtitle||e.subtitle!=null,Ie=!!(e.appendAvatar||e.appendIcon),Bt=!!(Ie||t.append),Le=!!(e.prependAvatar||e.prependIcon),de=!!(Le||t.prepend);return T==null||T.updateHasPrepend(de),e.activeColor&&Kt("active-color",["color","base-color"]),he(m(S,ke({class:["v-list-item",{"v-list-item--active":B.value,"v-list-item--disabled":e.disabled,"v-list-item--link":O.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!de&&(T==null?void 0:T.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&B.value},J.value,b.value,C.value,X.value,Tt.value,At.value,xt.value,K.value,e.class],style:[I.value,Ct.value,e.style],tabindex:O.value?T?-2:0:void 0,"aria-selected":q.value?l.activatable.value?v.value:l.selectable.value?d.value:B.value:void 0,onClick:Et,onKeydown:O.value&&!R.value&&Pt},i.linkProps),{default:()=>{var Ne;return[ot(O.value||B.value,"v-list-item"),de&&m("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?m(ge,{key:"prepend-defaults",disabled:!Le,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=t.prepend)==null?void 0:V.call(t,ue.value)]}}):m(ee,null,[e.prependAvatar&&m(Fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[$&&m(za,{key:"title"},{default:()=>{var V;return[((V=t.title)==null?void 0:V.call(t,{title:e.title}))??e.title]}}),Vt&&m($a,{key:"subtitle"},{default:()=>{var V;return[((V=t.subtitle)==null?void 0:V.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(Ne=t.default)==null?void 0:Ne.call(t,ue.value)]),Bt&&m("div",{key:"append",class:"v-list-item__append"},[t.append?m(ge,{key:"append-defaults",disabled:!Ie,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=t.append)==null?void 0:V.call(t,ue.value)]}}):m(ee,null,[e.appendIcon&&m(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(Fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Je("ripple"),O.value&&e.ripple]])}),{activate:o,isActivated:v,isGroupActivator:g,isSelected:d,list:T,select:u,root:l,id:w,link:i}}});export{Ja as A,Ka as B,st as C,lt as D,rt as E,Xa as F,Ha as G,Fe as H,wa as I,ct as J,Sa as K,ot as L,Z as M,za as N,qe as O,Aa as R,va as V,re as a,nt as b,ma as c,Ee as d,ra as e,it as f,ha as g,Pe as h,ge as i,Wa as j,Ua as k,Qt as l,D as m,Fa as n,fe as o,Qe as p,et as q,Ya as r,Qa as s,Ge as t,G as u,Ma as v,sa as w,Za as x,Oa as y,Ea as z};
