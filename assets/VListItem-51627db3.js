import{ac as se,p as b,n as P,Z as bt,ad as Ne,X as U,g as de,ae as St,r as T,af as wt,T as ve,ag as _t,y as kt,c as h,e as k,q as u,C as Re,V as De,s as V,w as F,P as Ct,R as Tt,a0 as re,a8 as $e,Q as W,a1 as xt,W as $,ah as z,ai as ze,aj as _e,ak as Et,al as Vt,f as At,b as Pt,L as ke,$ as Y,t as me,v as he,am as It,u as Oe,an as Lt,ao as Bt,ap as Nt,aq as Ce,ar as Rt,as as Te,i as K,h as X,at as L,j as Dt,o as Ge,A as xe,au as Ee,av as $t}from"./index-537b05b4.js";const zt=["top","bottom"],Ot=["start","end","left","right"];function En(e,a){let[n,t]=e.split(" ");return t||(t=se(zt,n)?"start":se(Ot,n)?"top":"center"),{side:Ve(n,a),align:Ve(t,a)}}function Ve(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}const B=b({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Me(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return P()({name:n??bt(Ne(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...B()},setup(t,s){let{slots:i}=s;return()=>{var r;return U(t.tag,{class:[e,t.class],style:t.style},(r=i.default)==null?void 0:r.call(i))}}})}function O(e){const a=de("useRender");a.render=e}const Vn=[{title:"admin.sc-voice.net",summary:"Voice administration website",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",admin:!0,text:`
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
  `,github:"dhammaregen/dhammaregen"}].map((e,a)=>(e.value=a,e)),Gt=[{name:"www.api.sc-voice.net",url:"https://www.api.sc-voice.net",title:"Default language server; SuttaCentral gateway"},{name:"pli.api.sc-voice.net",url:"https://pli.api.sc-voice.net",title:"Pali server (pli)"},{name:"s1.sc-voice.net",url:"https://s1.sc-voice.net",title:"Legacy scv-server"}],Mt=[{title:"Glossary",icon:"mdi-file-word-box",value:""},{title:"SuttaCentral Voice",icon:"mdi-account-voice",value:"voice"},{title:"Administration",icon:"mdi-shield-crown",value:"admin"},{title:"Voice API Servers",icon:"mdi-server",value:"api"},{title:"Software Libraries",icon:"mdi-library",value:"library"}],An=St("app",{state:()=>({servers:Gt,filters:Mt,filter:T(""),itemIndex:T(0)}),actions:{setItemIndex(e){this.itemIndex=e}}}),ge=b({tag:{type:String,default:"div"}},"tag"),qt=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e,a,n){return P()({name:e,props:qt({mode:n,origin:a}),setup(t,s){let{slots:i}=s;const r={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:g,offsetLeft:d,offsetWidth:m,offsetHeight:l}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${g}px`,o.style.left=`${d}px`,o.style.width=`${m}px`,o.style.height=`${l}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:g,top:d,left:m,width:l,height:c}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=g||"",o.style.top=d||"",o.style.left=m||"",o.style.width=l||"",o.style.height=c||""}}};return()=>{const o=t.group?wt:ve;return U(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},i.default)}}})}function qe(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return P()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,s){let{slots:i}=s;return()=>U(ve,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function He(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Ne(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const g=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=g})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[n]=o),delete r._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const Pn=qe("expand-transition",He());qe("expand-x-transition",He("",!0));const Ht=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ae=P(!1)({name:"VDefaultsProvider",props:Ht(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:i,root:r,scoped:o}=_t(e);return kt(t,{reset:i,root:r,scoped:o,disabled:s}),()=>{var g;return(g=n.default)==null?void 0:g.call(n)}}});const je=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Fe(e){return{dimensionStyles:h(()=>({height:k(e.height),maxHeight:k(e.maxHeight),maxWidth:k(e.maxWidth),minHeight:k(e.minHeight),minWidth:k(e.minWidth),width:k(e.width)}))}}function jt(e){return{aspectStyles:h(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const We=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...je()},"VResponsive"),Pe=P()({name:"VResponsive",props:We(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=jt(e),{dimensionStyles:s}=Fe(e);return O(()=>{var i;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ft=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),j=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...i}=e,{component:r=ve,...o}=typeof t=="object"?t:{};return U(r,Re(typeof t=="string"?{name:s?"":t}:o,i,{disabled:s}),n)};function Wt(e,a){if(!De)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var l;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const d=(l=e._observe)==null?void 0:l[a.instance.$.uid];if(!d)return;const m=o.some(c=>c.isIntersecting);s&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&s(m,o,g),m&&n.once?Ye(e,a):d.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ye(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Yt={mounted:Wt,unmounted:Ye},Jt=Yt,Ut=b({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...We(),...B(),...Ft()},"VImg"),Kt=P()({name:"VImg",directives:{intersect:Jt},props:Ut(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=V(""),i=T(),r=V(e.eager?"loading":"idle"),o=V(),g=V(),d=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>d.value.aspect||o.value/g.value||0);F(()=>e.src,()=>{l(r.value!=="idle")}),F(m,(f,S)=>{!f&&S&&i.value&&I(i.value)}),Ct(()=>l());function l(f){if(!(e.eager&&f)&&!(De&&!f&&!e.eager)){if(r.value="loading",d.value.lazySrc){const S=new Image;S.src=d.value.lazySrc,I(S,null)}d.value.src&&Tt(()=>{var S,E;if(n("loadstart",((S=i.value)==null?void 0:S.currentSrc)||d.value.src),(E=i.value)!=null&&E.complete){if(i.value.naturalWidth||v(),r.value==="error")return;m.value||I(i.value,null),c()}else m.value||I(i.value),p()})}}function c(){var f;p(),r.value="loaded",n("load",((f=i.value)==null?void 0:f.currentSrc)||d.value.src)}function v(){var f;r.value="error",n("error",((f=i.value)==null?void 0:f.currentSrc)||d.value.src)}function p(){const f=i.value;f&&(s.value=f.currentSrc||f.src)}let x=-1;function I(f){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{clearTimeout(x);const{naturalHeight:M,naturalWidth:q}=f;M||q?(o.value=q,g.value=M):!f.complete&&r.value==="loading"&&S!=null?x=window.setTimeout(E,S):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,g.value=1)};E()}const A=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Q=()=>{var E;if(!d.value.src||r.value==="idle")return null;const f=u("img",{class:["v-img__img",A.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:c,onError:v},null),S=(E=t.sources)==null?void 0:E.call(t);return u(j,{transition:e.transition,appear:!0},{default:()=>[re(S?u("picture",{class:"v-img__picture"},[S,f]):f,[[xt,r.value==="loaded"]])]})},Z=()=>u(j,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",A.value],src:d.value.lazySrc,alt:e.alt},null)]}),ee=()=>t.placeholder?u(j,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,te=()=>t.error?u(j,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,ne=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,G=V(!1);{const f=F(m,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.value=!0})}),f())})}return O(()=>{const[f]=Pe.filterProps(e);return re(u(Pe,Re({class:["v-img",{"v-img--booting":!G.value},e.class],style:[{width:k(e.width==="auto"?o.value:e.width)},e.style]},f,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(W,null,[u(Q,null,null),u(Z,null,null),u(ne,null,null),u(ee,null,null),u(te,null,null)]),default:t.default}),[[$e("intersect"),{handler:l,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:i,state:r,naturalWidth:o,naturalHeight:g}}}),Xt=b({border:[Boolean,Number,String]},"border");function Qt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{borderClasses:h(()=>{const t=z(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}function pe(e){return ze(()=>{const a=[],n={};if(e.value.background)if(_e(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text){const t=Et(e.value.background);if(t.a==null||t.a===1){const s=Vt(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(_e(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Zt(e,a){const n=h(()=>({text:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=pe(n);return{textColorClasses:t,textColorStyles:s}}function In(e,a){const n=h(()=>({background:z(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=pe(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const en=b({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function tn(e){return{elevationClasses:h(()=>{const n=z(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Je=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{roundedClasses:h(()=>{const t=z(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}function Ln(){const e=V(!1);return At(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:Pt(e)}}const nn=[null,"default","comfortable","compact"],Ke=b({density:{type:String,default:"default",validator:e=>nn.includes(e)}},"density");function Xe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{densityClasses:h(()=>`${a}--density-${e.density}`)}}const an=["elevated","flat","tonal","outlined","text","plain"];function Qe(e,a){return u(W,null,[e&&u("span",{key:"overlay",class:`${a}__overlay`},null),u("span",{key:"underlay",class:`${a}__underlay`},null)])}const Ze=b({color:String,variant:{type:String,default:"elevated",validator:e=>an.includes(e)}},"variant");function et(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();const n=h(()=>{const{variant:i}=ke(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=pe(h(()=>{const{variant:i,color:r}=ke(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const sn=["x-small","small","default","large","x-large"],tt=b({size:{type:[String,Number],default:"default"}},"size");function nt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return ze(()=>{let n,t;return se(sn,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:k(e.size),height:k(e.size)}),{sizeClasses:n,sizeStyles:t}})}const rn=b({color:String,start:Boolean,end:Boolean,icon:Y,...B(),...tt(),...ge({tag:"i"}),...me()},"VIcon"),oe=P()({name:"VIcon",props:rn(),setup(e,a){let{attrs:n,slots:t}=a;const s=T(),{themeClasses:i}=he(e),{iconData:r}=It(h(()=>s.value||e.icon)),{sizeClasses:o}=nt(e),{textColorClasses:g,textColorStyles:d}=Zt(Oe(e,"color"));return O(()=>{var l,c;const m=(l=t.default)==null?void 0:l.call(t);return m&&(s.value=(c=Lt(m).filter(v=>v.type===Bt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children),u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,g.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},d.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function Bn(){var e,a;return(a=(e=de("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function on(e,a){const n=Nt("RouterLink"),t=h(()=>!!(e.href||e.to)),s=h(()=>(t==null?void 0:t.value)||Ce(a,"click")||Ce(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:s,href:Oe(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&h(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:h(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const ln=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const le=Symbol("rippleStop"),cn=80;function Ie(e,a){e.style.transform=a,e.style.webkitTransform=a}function ce(e){return e.constructor.name==="TouchEvent"}function at(e){return e.constructor.name==="KeyboardEvent"}const un=function(e,a){var l;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!at(e)){const c=a.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;t=v.clientX-c.left,s=v.clientY-c.top}let i=0,r=.3;(l=a._ripple)!=null&&l.circle?(r=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-i*2)/2}px`,g=`${(a.clientHeight-i*2)/2}px`,d=n.center?o:`${t-i}px`,m=n.center?g:`${s-i}px`;return{radius:i,scale:r,x:d,y:m,centerX:o,centerY:g}},J={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:r,x:o,y:g,centerX:d,centerY:m}=un(e,a,n),l=`${i*2}px`;s.className="v-ripple__animation",s.style.width=l,s.style.height=l,a.appendChild(t);const c=window.getComputedStyle(a);c&&c.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ie(s,`translate(${o}, ${g}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ie(s,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function it(e){return typeof e>"u"||!!e}function N(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[le])){if(e[le]=!0,ce(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||at(e),n._ripple.class&&(a.class=n._ripple.class),ce(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{J.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},cn)}else J.show(e,n,a)}}function Le(e){e[le]=!0}function w(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),J.hide(a)}}function st(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let R=!1;function rt(e){!R&&(e.keyCode===Te.enter||e.keyCode===Te.space)&&(R=!0,N(e))}function ot(e){R=!1,w(e)}function lt(e){R&&(R=!1,w(e))}function ct(e,a,n){const{value:t,modifiers:s}=a,i=it(t);if(i||J.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Rt(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",Le,{passive:!0}),e.addEventListener("mousedown",Le);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",N),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",rt),e.addEventListener("keyup",ot),e.addEventListener("blur",lt),e.addEventListener("dragstart",w,{passive:!0})}else!i&&n&&ut(e)}function ut(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",rt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",w),e.removeEventListener("blur",lt)}function dn(e,a){ct(e,a,!1)}function vn(e){delete e._ripple,ut(e)}function mn(e,a){if(a.value===a.oldValue)return;const n=it(a.oldValue);ct(e,a,n)}const hn={mounted:dn,unmounted:vn,updated:mn},ue=Symbol.for("vuetify:list");function Nn(){const e=K(ue,{hasPrepend:V(!1),updateHasPrepend:()=>null}),a={hasPrepend:V(!1),updateHasPrepend:n=>{n&&(a.hasPrepend.value=n)}};return X(ue,a),e}function gn(){return K(ue,null)}const pn={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){const i=new Set;i.add(a);let r=s.get(a);for(;r!=null;)i.add(r),r=s.get(r);return i}else return t.delete(a),t},select:()=>null},dt={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){let i=s.get(a);for(t.add(a);i!=null&&i!==a;)t.add(i),i=s.get(i);return t}else t.delete(a);return t},select:()=>null},fn={open:dt.open,select:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(!n)return t;const i=[];let r=s.get(a);for(;r!=null;)i.push(r),r=s.get(r);return new Set(i)}},fe=e=>{const a={select:n=>{let{id:t,value:s,selected:i}=n;if(t=L(t),e&&!s){const r=Array.from(i.entries()).reduce((o,g)=>{let[d,m]=g;return m==="on"?[...o,d]:o},[]);if(r.length===1&&r[0]===t)return i}return i.set(t,s?"on":"off"),i},in:(n,t,s)=>{let i=new Map;for(const r of n||[])i=a.select({id:r,value:!0,selected:new Map(i),children:t,parents:s});return i},out:n=>{const t=[];for(const[s,i]of n.entries())i==="on"&&t.push(s);return t}};return a},vt=e=>{const a=fe(e);return{select:t=>{let{selected:s,id:i,...r}=t;i=L(i);const o=s.has(i)?new Map([[i,s.get(i)]]):new Map;return a.select({...r,id:i,selected:o})},in:(t,s,i)=>{let r=new Map;return t!=null&&t.length&&(r=a.in(t.slice(0,1),s,i)),r},out:(t,s,i)=>a.out(t,s,i)}},yn=e=>{const a=fe(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=L(s),r.has(s)?i:a.select({id:s,selected:i,children:r,...o})},in:a.in,out:a.out}},bn=e=>{const a=vt(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=L(s),r.has(s)?i:a.select({id:s,selected:i,children:r,...o})},in:a.in,out:a.out}},Sn=e=>{const a={select:n=>{let{id:t,value:s,selected:i,children:r,parents:o}=n;t=L(t);const g=new Map(i),d=[t];for(;d.length;){const l=d.shift();i.set(l,s?"on":"off"),r.has(l)&&d.push(...r.get(l))}let m=o.get(t);for(;m;){const l=r.get(m),c=l.every(p=>i.get(p)==="on"),v=l.every(p=>!i.has(p)||i.get(p)==="off");i.set(m,c?"on":v?"off":"indeterminate"),m=o.get(m)}return e&&!s&&Array.from(i.entries()).reduce((c,v)=>{let[p,x]=v;return x==="on"?[...c,p]:c},[]).length===0?g:i},in:(n,t,s)=>{let i=new Map;for(const r of n||[])i=a.select({id:r,value:!0,selected:new Map(i),children:t,parents:s});return i},out:(n,t)=>{const s=[];for(const[i,r]of n.entries())r==="on"&&!t.has(i)&&s.push(i);return s}};return a},D=Symbol.for("vuetify:nested"),mt={id:V(),root:{register:()=>null,unregister:()=>null,parents:T(new Map),children:T(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:T(new Set),selected:T(new Map),selectedValues:T([])}},Rn=b({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Dn=e=>{let a=!1;const n=T(new Map),t=T(new Map),s=xe(e,"opened",e.opened,l=>new Set(l),l=>[...l.values()]),i=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return bn(e.mandatory);case"leaf":return yn(e.mandatory);case"independent":return fe(e.mandatory);case"single-independent":return vt(e.mandatory);case"classic":default:return Sn(e.mandatory)}}),r=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return fn;case"single":return pn;case"multiple":default:return dt}}),o=xe(e,"selected",e.selected,l=>i.value.in(l,n.value,t.value),l=>i.value.out(l,n.value,t.value));Ge(()=>{a=!0});function g(l){const c=[];let v=l;for(;v!=null;)c.unshift(v),v=t.value.get(v);return c}const d=de("nested"),m={id:V(),root:{opened:s,selected:o,selectedValues:h(()=>{const l=[];for(const[c,v]of o.value.entries())v==="on"&&l.push(c);return l}),register:(l,c,v)=>{c&&l!==c&&t.value.set(l,c),v&&n.value.set(l,[]),c!=null&&n.value.set(c,[...n.value.get(c)||[],l])},unregister:l=>{if(a)return;n.value.delete(l);const c=t.value.get(l);if(c){const v=n.value.get(c)??[];n.value.set(c,v.filter(p=>p!==l))}t.value.delete(l),s.value.delete(l)},open:(l,c,v)=>{d.emit("click:open",{id:l,value:c,path:g(l),event:v});const p=r.value.open({id:l,value:c,opened:new Set(s.value),children:n.value,parents:t.value,event:v});p&&(s.value=p)},openOnSelect:(l,c,v)=>{const p=r.value.select({id:l,value:c,selected:new Map(o.value),opened:new Set(s.value),children:n.value,parents:t.value,event:v});p&&(s.value=p)},select:(l,c,v)=>{d.emit("click:select",{id:l,value:c,path:g(l),event:v});const p=i.value.select({id:l,value:c,selected:new Map(o.value),children:n.value,parents:t.value,event:v});p&&(o.value=p),m.root.openOnSelect(l,c,v)},children:n,parents:t}};return X(D,m),m.root},wn=(e,a)=>{const n=K(D,mt),t=Symbol(Dt()),s=h(()=>e.value!==void 0?e.value:t),i={...n,id:s,open:(r,o)=>n.root.open(s.value,r,o),openOnSelect:(r,o)=>n.root.openOnSelect(s.value,r,o),isOpen:h(()=>n.root.opened.value.has(s.value)),parent:h(()=>n.root.parents.value.get(s.value)),select:(r,o)=>n.root.select(s.value,r,o),isSelected:h(()=>n.root.selected.value.get(L(s.value))==="on"),isIndeterminate:h(()=>n.root.selected.value.get(s.value)==="indeterminate"),isLeaf:h(()=>!n.root.children.value.get(s.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(s.value,n.id.value,a),Ge(()=>{!n.isGroupActivator&&n.root.unregister(s.value)}),a&&X(D,i),i},$n=()=>{const e=K(D,mt);X(D,{...e,isGroupActivator:!0})};const _n=Me("v-list-item-subtitle"),kn=Me("v-list-item-title");const Cn=b({start:Boolean,end:Boolean,icon:Y,image:String,...B(),...Ke(),...Je(),...tt(),...ge(),...me(),...Ze({variant:"flat"})},"VAvatar"),Be=P()({name:"VAvatar",props:Cn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=he(e),{colorClasses:s,colorStyles:i,variantClasses:r}=et(e),{densityClasses:o}=Xe(e),{roundedClasses:g}=Ue(e),{sizeClasses:d,sizeStyles:m}=nt(e);return O(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,g.value,d.value,r.value,e.class],style:[i.value,m.value,e.style]},{default:()=>{var l;return[e.image?u(Kt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(oe,{key:"icon",icon:e.icon},null):(l=n.default)==null?void 0:l.call(n),Qe(!1,"v-avatar")]}})),{}}}),Tn=b({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Y,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Y,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Ee(),onClickOnce:Ee(),...Xt(),...B(),...Ke(),...je(),...en(),...Je(),...ln(),...ge(),...me(),...Ze({variant:"text"})},"VListItem"),zn=P()({name:"VListItem",directives:{Ripple:hn},props:Tn(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:s}=a;const i=on(e,n),r=h(()=>e.value===void 0?i.href.value:e.value),{select:o,isSelected:g,isIndeterminate:d,isGroupActivator:m,root:l,parent:c,openOnSelect:v}=wn(r,!1),p=gn(),x=h(()=>{var y;return e.active!==!1&&(e.active||((y=i.isActive)==null?void 0:y.value)||g.value)}),I=h(()=>e.link!==!1&&i.isLink.value),A=h(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||e.value!=null&&!!p)),Q=h(()=>e.rounded||e.nav),Z=h(()=>e.color??e.activeColor),ee=h(()=>({color:x.value?Z.value??e.baseColor:e.baseColor,variant:e.variant}));F(()=>{var y;return(y=i.isActive)==null?void 0:y.value},y=>{y&&c.value!=null&&l.open(c.value,!0),y&&v(y)},{immediate:!0});const{themeClasses:te}=he(e),{borderClasses:ne}=Qt(e),{colorClasses:G,colorStyles:f,variantClasses:S}=et(ee),{densityClasses:E}=Xe(e),{dimensionStyles:M}=Fe(e),{elevationClasses:q}=tn(e),{roundedClasses:ht}=Ue(Q),gt=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ae=h(()=>({isActive:x.value,select:o,isSelected:g.value,isIndeterminate:d.value}));function ye(y){var H;s("click",y),!(m||!A.value)&&((H=i.navigate)==null||H.call(i,y),e.value!=null&&o(!g.value,y))}function pt(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),ye(y))}return O(()=>{const y=I.value?"a":e.tag,H=t.title||e.title,ft=t.subtitle||e.subtitle,be=!!(e.appendAvatar||e.appendIcon),yt=!!(be||t.append),Se=!!(e.prependAvatar||e.prependIcon),ie=!!(Se||t.prepend);return p==null||p.updateHasPrepend(ie),e.activeColor&&$t("active-color",["color","base-color"]),re(u(y,{class:["v-list-item",{"v-list-item--active":x.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ie&&(p==null?void 0:p.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&x.value},te.value,ne.value,G.value,E.value,q.value,gt.value,ht.value,S.value,e.class],style:[f.value,M.value,e.style],href:i.href.value,tabindex:A.value?p?-2:0:void 0,onClick:ye,onKeydown:A.value&&!I.value&&pt},{default:()=>{var we;return[Qe(A.value||x.value,"v-list-item"),ie&&u("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?u(Ae,{key:"prepend-defaults",disabled:!Se,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=t.prepend)==null?void 0:C.call(t,ae.value)]}}):u(W,null,[e.prependAvatar&&u(Be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&u(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),u("div",{class:"v-list-item__spacer"},null)]),u("div",{class:"v-list-item__content","data-no-activator":""},[H&&u(kn,{key:"title"},{default:()=>{var C;return[((C=t.title)==null?void 0:C.call(t,{title:e.title}))??e.title]}}),ft&&u(_n,{key:"subtitle"},{default:()=>{var C;return[((C=t.subtitle)==null?void 0:C.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(we=t.default)==null?void 0:we.call(t,ae.value)]),yt&&u("div",{key:"append",class:"v-list-item__append"},[t.append?u(Ae,{key:"append-defaults",disabled:!be,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=t.append)==null?void 0:C.call(t,ae.value)]}}):u(W,null,[e.appendIcon&&u(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&u(Be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),u("div",{class:"v-list-item__spacer"},null)])]}}),[[$e("ripple"),A.value&&e.ripple]])}),{}}});export{Ke as A,je as B,Ze as C,Xe as D,Fe as E,Dn as F,Vn as G,Be as H,ln as I,et as J,on as K,Qe as L,j as M,kn as N,Pe as O,hn as R,Kt as V,ge as a,Xt as b,en as c,Je as d,In as e,Qt as f,tn as g,Ue as h,Ae as i,Pn as j,Ln as k,Me as l,B as m,An as n,oe as o,Bn as p,zn as q,En as r,Zt as s,Ve as t,O as u,$n as v,wn as w,gn as x,Nn as y,Rn as z};
