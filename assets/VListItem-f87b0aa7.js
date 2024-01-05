import{ac as se,p as b,n as I,Z as bt,ad as $e,X as K,g as de,ae as St,r as T,af as wt,T as ve,ag as _t,y as kt,c as g,e as k,q as u,C as Ne,V as ze,s as V,w as F,P as Ct,R as Tt,a0 as re,a8 as Re,Q as q,a1 as xt,W as R,ah as O,ai as Oe,aj as _e,ak as Pt,al as Vt,f as At,b as It,L as ke,$ as U,t as me,v as ge,am as Et,u as De,an as Lt,ao as Bt,ap as $t,aq as Ce,ar as Nt,as as Te,i as X,h as Y,at as L,j as zt,o as Me,A as xe,au as Pe,av as Rt}from"./index-4214db31.js";const Ot=["top","bottom"],Dt=["start","end","left","right"];function Pn(e,a){let[n,t]=e.split(" ");return t||(t=se(Ot,n)?"start":se(Dt,n)?"top":"center"),{side:Ve(n,a),align:Ve(t,a)}}function Ve(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}const B=b({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function He(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return I()({name:n??bt($e(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...B()},setup(t,s){let{slots:i}=s;return()=>{var r;return K(t.tag,{class:[e,t.class],style:t.style},(r=i.default)==null?void 0:r.call(i))}}})}function D(e){const a=de("useRender");a.render=e}const Vn=[{title:"admin.sc-voice.net",summary:"Voice administration website",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",admin:!0,text:`
    (This server)
    Used by Voice administrators to monitor and maintain
    API servers. 
  `},{title:"api_sc-voice_net",summary:"Voice API server source",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",text:`
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
  `},{title:"ebt-deepl",summary:"EBT DeepL translation adaptor",github:"sc-voice/ebt-deepl",library:"npm install ebt-deepl (TBD)",text:`
    Github repository for adding human-editable DeepL
    EBT translations. Includes glossary support.
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
  `},{title:"Feature Backlog",summary:"Things we plan to do for SuttaCentral Voice",issue:{owner:"dhammaregen",repo:"dhammaregen3",issue_number:1},link:"https://github.com/dhammaregen/dhammaregen3/issues/1",admin:!0},{title:"Linode Server",summary:"Voice API server hardware",link:"https://github.com/sc-voice/api_sc-voice_net/wiki/Linode-Server-Setup",admin:!0,api:"api.sc-voice.net",text:`
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
  `},{title:"Site-TBA",summary:"French EBT-Site hosted by Noé Ismet",link:"https://www.pannabijani.net/site-tba",voice:"EBT-Site",text:`
    French language EBT-Site
  `,github:"pannabijani/site-tba"},{title:"pli.api.sc-voice.net",summary:"Pali (pli) Voice API server",link:"https://pli.api.sc-voice.net/status",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://pli.api.sc-voice.net/scv/probes",text:`
    (not implemented)
    Pali (pli) Voice API server will eventually
    handle all Pali audio. Although any API server
    can handle Pali, Pali audio requirements will probably
    exceed those for any other language. 
    In addition, all translations need Pali anyway, so
    centralizing Pali audio frees up disk for all other
    API servers.
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
  `},{title:"@sc-voice/state-log",github:"sc-voice/state-log",link:"https://sc-voice.github.io/state-log",summary:"Javascript library for logging server JSON state",library:"npm install @sc-voice/state-log",text:`
    Javascript client and server library for monitoring 
    remote server state. 
    Compatible with any HTTP server that provide status information 
    in JSON format.
  `},{title:"staging.api.sc-voice.net",summary:"Staging Voice API server",link:"https://staging.api.sc-voice.net/status",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://staging.api.sc-voice.net/scv/probes",text:`
    The staging Voice API server is used to test
    new software releases before pushing those
    releases to www.api.sc-voice.net
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
  `},{title:"System Status",summary:"SuttaCentral Voice server status",link:"https://admin.sc-voice.net",github:"sc-voice/admin_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://staging.api.sc-voice.net/scv/probes",text:`
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
  `},{title:"voice.suttacentral.net",summary:"Legacy Voice website",link:"https://voice.suttacentral.net",api:"voice.suttacentral.net",voice:"(deprecated)",text:`
    The original Voice website has been superceded 
    by multiple EBT-Sites implemented using
    more current technology. 
    It is no longer being maintained.
  `,github:"sc-voice/sc-voice"},{title:"www.api.sc-voice.net",summary:"Default Voice API server",link:"https://www.api.sc-voice.net/status",github:"sc-voice/api_sc-voice_net",api:"api.sc-voice.net",admin:!0,monitor:"https://www.api.sc-voice.net/scv/probes",text:`
    The default Voice API server handles languages
    with few segmented translations.
    Languages with extensive translations should  be
    allocated their own API server (e.g., pli.api.sc-voice.net)
  `}].map((e,a)=>(e.value=a,e)),Mt=[{name:"www.api.sc-voice.net",url:"https://www.api.sc-voice.net",title:"Default language server; SuttaCentral gateway"},{name:"pli.api.sc-voice.net",url:"https://pli.api.sc-voice.net",title:"Pali server (pli)"},{name:"s1.sc-voice.net",url:"https://s1.sc-voice.net",title:"Legacy scv-server"}],Ht=[{title:"Glossary",icon:"mdi-file-word-box",value:""},{title:"SuttaCentral Voice",icon:"mdi-account-voice",value:"voice"},{title:"Administration",icon:"mdi-shield-crown",value:"admin"},{title:"Voice API Servers",icon:"mdi-server",value:"api"},{title:"Software Libraries",icon:"mdi-library",value:"library"}],An=St("app",{state:()=>({servers:Mt,filters:Ht,filter:T(""),itemIndex:T(0)}),actions:{setItemIndex(e){this.itemIndex=e}}}),he=b({tag:{type:String,default:"div"}},"tag"),jt=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e,a,n){return I()({name:e,props:jt({mode:n,origin:a}),setup(t,s){let{slots:i}=s;const r={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:h,offsetLeft:d,offsetWidth:m,offsetHeight:l}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${h}px`,o.style.left=`${d}px`,o.style.width=`${m}px`,o.style.height=`${l}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:h,top:d,left:m,width:l,height:c}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=h||"",o.style.top=d||"",o.style.left=m||"",o.style.width=l||"",o.style.height=c||""}}};return()=>{const o=t.group?wt:ve;return K(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},i.default)}}})}function je(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,s){let{slots:i}=s;return()=>K(ve,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function Ge(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=$e(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const h=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=h})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[n]=o),delete r._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const In=je("expand-transition",Ge());je("expand-x-transition",Ge("",!0));const Gt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ae=I(!1)({name:"VDefaultsProvider",props:Gt(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:i,root:r,scoped:o}=_t(e);return kt(t,{reset:i,root:r,scoped:o,disabled:s}),()=>{var h;return(h=n.default)==null?void 0:h.call(n)}}});const We=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Fe(e){return{dimensionStyles:g(()=>({height:k(e.height),maxHeight:k(e.maxHeight),maxWidth:k(e.maxWidth),minHeight:k(e.minHeight),minWidth:k(e.minWidth),width:k(e.width)}))}}function Wt(e){return{aspectStyles:g(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const qe=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...We()},"VResponsive"),Ie=I()({name:"VResponsive",props:qe(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Wt(e),{dimensionStyles:s}=Fe(e);return D(()=>{var i;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ft=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,...i}=e,{component:r=ve,...o}=typeof t=="object"?t:{};return K(r,Ne(typeof t=="string"?{name:s?"":t}:o,i,{disabled:s}),n)};function qt(e,a){if(!ze)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var l;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const d=(l=e._observe)==null?void 0:l[a.instance.$.uid];if(!d)return;const m=o.some(c=>c.isIntersecting);s&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&s(m,o,h),m&&n.once?Ue(e,a):d.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ue(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Ut={mounted:qt,unmounted:Ue},Jt=Ut,Kt=b({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...qe(),...B(),...Ft()},"VImg"),Xt=I()({name:"VImg",directives:{intersect:Jt},props:Kt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=V(""),i=T(),r=V(e.eager?"loading":"idle"),o=V(),h=V(),d=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=g(()=>d.value.aspect||o.value/h.value||0);F(()=>e.src,()=>{l(r.value!=="idle")}),F(m,(f,S)=>{!f&&S&&i.value&&E(i.value)}),Ct(()=>l());function l(f){if(!(e.eager&&f)&&!(ze&&!f&&!e.eager)){if(r.value="loading",d.value.lazySrc){const S=new Image;S.src=d.value.lazySrc,E(S,null)}d.value.src&&Tt(()=>{var S,P;if(n("loadstart",((S=i.value)==null?void 0:S.currentSrc)||d.value.src),(P=i.value)!=null&&P.complete){if(i.value.naturalWidth||v(),r.value==="error")return;m.value||E(i.value,null),c()}else m.value||E(i.value),p()})}}function c(){var f;p(),r.value="loaded",n("load",((f=i.value)==null?void 0:f.currentSrc)||d.value.src)}function v(){var f;r.value="error",n("error",((f=i.value)==null?void 0:f.currentSrc)||d.value.src)}function p(){const f=i.value;f&&(s.value=f.currentSrc||f.src)}let x=-1;function E(f){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const P=()=>{clearTimeout(x);const{naturalHeight:H,naturalWidth:j}=f;H||j?(o.value=j,h.value=H):!f.complete&&r.value==="loading"&&S!=null?x=window.setTimeout(P,S):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,h.value=1)};P()}const A=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Q=()=>{var P;if(!d.value.src||r.value==="idle")return null;const f=u("img",{class:["v-img__img",A.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:c,onError:v},null),S=(P=t.sources)==null?void 0:P.call(t);return u(W,{transition:e.transition,appear:!0},{default:()=>[re(S?u("picture",{class:"v-img__picture"},[S,f]):f,[[xt,r.value==="loaded"]])]})},Z=()=>u(W,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",A.value],src:d.value.lazySrc,alt:e.alt},null)]}),ee=()=>t.placeholder?u(W,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,te=()=>t.error?u(W,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,ne=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,M=V(!1);{const f=F(m,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{M.value=!0})}),f())})}return D(()=>{const[f]=Ie.filterProps(e);return re(u(Ie,Ne({class:["v-img",{"v-img--booting":!M.value},e.class],style:[{width:k(e.width==="auto"?o.value:e.width)},e.style]},f,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(q,null,[u(Q,null,null),u(Z,null,null),u(ne,null,null),u(ee,null,null),u(te,null,null)]),default:t.default}),[[Re("intersect"),{handler:l,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:i,state:r,naturalWidth:o,naturalHeight:h}}}),Yt=b({border:[Boolean,Number,String]},"border");function Qt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{borderClasses:g(()=>{const t=O(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}function pe(e){return Oe(()=>{const a=[],n={};if(e.value.background)if(_e(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text){const t=Pt(e.value.background);if(t.a==null||t.a===1){const s=Vt(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(_e(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function Zt(e,a){const n=g(()=>({text:O(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=pe(n);return{textColorClasses:t,textColorStyles:s}}function En(e,a){const n=g(()=>({background:O(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=pe(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const en=b({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function tn(e){return{elevationClasses:g(()=>{const n=O(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Je=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ke(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{roundedClasses:g(()=>{const t=O(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}function Ln(){const e=V(!1);return At(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:It(e)}}const nn=[null,"default","comfortable","compact"],Xe=b({density:{type:String,default:"default",validator:e=>nn.includes(e)}},"density");function Ye(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{densityClasses:g(()=>`${a}--density-${e.density}`)}}const an=["elevated","flat","tonal","outlined","text","plain"];function Qe(e,a){return u(q,null,[e&&u("span",{key:"overlay",class:`${a}__overlay`},null),u("span",{key:"underlay",class:`${a}__underlay`},null)])}const Ze=b({color:String,variant:{type:String,default:"elevated",validator:e=>an.includes(e)}},"variant");function et(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();const n=g(()=>{const{variant:i}=ke(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=pe(g(()=>{const{variant:i,color:r}=ke(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const sn=["x-small","small","default","large","x-large"],tt=b({size:{type:[String,Number],default:"default"}},"size");function nt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return Oe(()=>{let n,t;return se(sn,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:k(e.size),height:k(e.size)}),{sizeClasses:n,sizeStyles:t}})}const rn=b({color:String,start:Boolean,end:Boolean,icon:U,...B(),...tt(),...he({tag:"i"}),...me()},"VIcon"),oe=I()({name:"VIcon",props:rn(),setup(e,a){let{attrs:n,slots:t}=a;const s=T(),{themeClasses:i}=ge(e),{iconData:r}=Et(g(()=>s.value||e.icon)),{sizeClasses:o}=nt(e),{textColorClasses:h,textColorStyles:d}=Zt(De(e,"color"));return D(()=>{var l,c;const m=(l=t.default)==null?void 0:l.call(t);return m&&(s.value=(c=Lt(m).filter(v=>v.type===Bt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children),u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,h.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},d.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function Bn(){var e,a;return(a=(e=de("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function on(e,a){const n=$t("RouterLink"),t=g(()=>!!(e.href||e.to)),s=g(()=>(t==null?void 0:t.value)||Ce(a,"click")||Ce(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:s,href:De(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&g(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:g(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const ln=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const le=Symbol("rippleStop"),cn=80;function Ee(e,a){e.style.transform=a,e.style.webkitTransform=a}function ce(e){return e.constructor.name==="TouchEvent"}function at(e){return e.constructor.name==="KeyboardEvent"}const un=function(e,a){var l;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!at(e)){const c=a.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;t=v.clientX-c.left,s=v.clientY-c.top}let i=0,r=.3;(l=a._ripple)!=null&&l.circle?(r=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-i*2)/2}px`,h=`${(a.clientHeight-i*2)/2}px`,d=n.center?o:`${t-i}px`,m=n.center?h:`${s-i}px`;return{radius:i,scale:r,x:d,y:m,centerX:o,centerY:h}},J={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:r,x:o,y:h,centerX:d,centerY:m}=un(e,a,n),l=`${i*2}px`;s.className="v-ripple__animation",s.style.width=l,s.style.height=l,a.appendChild(t);const c=window.getComputedStyle(a);c&&c.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ee(s,`translate(${o}, ${h}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ee(s,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function it(e){return typeof e>"u"||!!e}function $(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[le])){if(e[le]=!0,ce(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||at(e),n._ripple.class&&(a.class=n._ripple.class),ce(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{J.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},cn)}else J.show(e,n,a)}}function Le(e){e[le]=!0}function w(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),J.hide(a)}}function st(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let N=!1;function rt(e){!N&&(e.keyCode===Te.enter||e.keyCode===Te.space)&&(N=!0,$(e))}function ot(e){N=!1,w(e)}function lt(e){N&&(N=!1,w(e))}function ct(e,a,n){const{value:t,modifiers:s}=a,i=it(t);if(i||J.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Nt(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",Le,{passive:!0}),e.addEventListener("mousedown",Le);return}e.addEventListener("touchstart",$,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",$),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",rt),e.addEventListener("keyup",ot),e.addEventListener("blur",lt),e.addEventListener("dragstart",w,{passive:!0})}else!i&&n&&ut(e)}function ut(e){e.removeEventListener("mousedown",$),e.removeEventListener("touchstart",$),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",rt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",w),e.removeEventListener("blur",lt)}function dn(e,a){ct(e,a,!1)}function vn(e){delete e._ripple,ut(e)}function mn(e,a){if(a.value===a.oldValue)return;const n=it(a.oldValue);ct(e,a,n)}const gn={mounted:dn,unmounted:vn,updated:mn},ue=Symbol.for("vuetify:list");function $n(){const e=X(ue,{hasPrepend:V(!1),updateHasPrepend:()=>null}),a={hasPrepend:V(!1),updateHasPrepend:n=>{n&&(a.hasPrepend.value=n)}};return Y(ue,a),e}function hn(){return X(ue,null)}const pn={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){const i=new Set;i.add(a);let r=s.get(a);for(;r!=null;)i.add(r),r=s.get(r);return i}else return t.delete(a),t},select:()=>null},dt={open:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(n){let i=s.get(a);for(t.add(a);i!=null&&i!==a;)t.add(i),i=s.get(i);return t}else t.delete(a);return t},select:()=>null},fn={open:dt.open,select:e=>{let{id:a,value:n,opened:t,parents:s}=e;if(!n)return t;const i=[];let r=s.get(a);for(;r!=null;)i.push(r),r=s.get(r);return new Set(i)}},fe=e=>{const a={select:n=>{let{id:t,value:s,selected:i}=n;if(t=L(t),e&&!s){const r=Array.from(i.entries()).reduce((o,h)=>{let[d,m]=h;return m==="on"?[...o,d]:o},[]);if(r.length===1&&r[0]===t)return i}return i.set(t,s?"on":"off"),i},in:(n,t,s)=>{let i=new Map;for(const r of n||[])i=a.select({id:r,value:!0,selected:new Map(i),children:t,parents:s});return i},out:n=>{const t=[];for(const[s,i]of n.entries())i==="on"&&t.push(s);return t}};return a},vt=e=>{const a=fe(e);return{select:t=>{let{selected:s,id:i,...r}=t;i=L(i);const o=s.has(i)?new Map([[i,s.get(i)]]):new Map;return a.select({...r,id:i,selected:o})},in:(t,s,i)=>{let r=new Map;return t!=null&&t.length&&(r=a.in(t.slice(0,1),s,i)),r},out:(t,s,i)=>a.out(t,s,i)}},yn=e=>{const a=fe(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=L(s),r.has(s)?i:a.select({id:s,selected:i,children:r,...o})},in:a.in,out:a.out}},bn=e=>{const a=vt(e);return{select:t=>{let{id:s,selected:i,children:r,...o}=t;return s=L(s),r.has(s)?i:a.select({id:s,selected:i,children:r,...o})},in:a.in,out:a.out}},Sn=e=>{const a={select:n=>{let{id:t,value:s,selected:i,children:r,parents:o}=n;t=L(t);const h=new Map(i),d=[t];for(;d.length;){const l=d.shift();i.set(l,s?"on":"off"),r.has(l)&&d.push(...r.get(l))}let m=o.get(t);for(;m;){const l=r.get(m),c=l.every(p=>i.get(p)==="on"),v=l.every(p=>!i.has(p)||i.get(p)==="off");i.set(m,c?"on":v?"off":"indeterminate"),m=o.get(m)}return e&&!s&&Array.from(i.entries()).reduce((c,v)=>{let[p,x]=v;return x==="on"?[...c,p]:c},[]).length===0?h:i},in:(n,t,s)=>{let i=new Map;for(const r of n||[])i=a.select({id:r,value:!0,selected:new Map(i),children:t,parents:s});return i},out:(n,t)=>{const s=[];for(const[i,r]of n.entries())r==="on"&&!t.has(i)&&s.push(i);return s}};return a},z=Symbol.for("vuetify:nested"),mt={id:V(),root:{register:()=>null,unregister:()=>null,parents:T(new Map),children:T(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:T(new Set),selected:T(new Map),selectedValues:T([])}},Nn=b({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),zn=e=>{let a=!1;const n=T(new Map),t=T(new Map),s=xe(e,"opened",e.opened,l=>new Set(l),l=>[...l.values()]),i=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return bn(e.mandatory);case"leaf":return yn(e.mandatory);case"independent":return fe(e.mandatory);case"single-independent":return vt(e.mandatory);case"classic":default:return Sn(e.mandatory)}}),r=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return fn;case"single":return pn;case"multiple":default:return dt}}),o=xe(e,"selected",e.selected,l=>i.value.in(l,n.value,t.value),l=>i.value.out(l,n.value,t.value));Me(()=>{a=!0});function h(l){const c=[];let v=l;for(;v!=null;)c.unshift(v),v=t.value.get(v);return c}const d=de("nested"),m={id:V(),root:{opened:s,selected:o,selectedValues:g(()=>{const l=[];for(const[c,v]of o.value.entries())v==="on"&&l.push(c);return l}),register:(l,c,v)=>{c&&l!==c&&t.value.set(l,c),v&&n.value.set(l,[]),c!=null&&n.value.set(c,[...n.value.get(c)||[],l])},unregister:l=>{if(a)return;n.value.delete(l);const c=t.value.get(l);if(c){const v=n.value.get(c)??[];n.value.set(c,v.filter(p=>p!==l))}t.value.delete(l),s.value.delete(l)},open:(l,c,v)=>{d.emit("click:open",{id:l,value:c,path:h(l),event:v});const p=r.value.open({id:l,value:c,opened:new Set(s.value),children:n.value,parents:t.value,event:v});p&&(s.value=p)},openOnSelect:(l,c,v)=>{const p=r.value.select({id:l,value:c,selected:new Map(o.value),opened:new Set(s.value),children:n.value,parents:t.value,event:v});p&&(s.value=p)},select:(l,c,v)=>{d.emit("click:select",{id:l,value:c,path:h(l),event:v});const p=i.value.select({id:l,value:c,selected:new Map(o.value),children:n.value,parents:t.value,event:v});p&&(o.value=p),m.root.openOnSelect(l,c,v)},children:n,parents:t}};return Y(z,m),m.root},wn=(e,a)=>{const n=X(z,mt),t=Symbol(zt()),s=g(()=>e.value!==void 0?e.value:t),i={...n,id:s,open:(r,o)=>n.root.open(s.value,r,o),openOnSelect:(r,o)=>n.root.openOnSelect(s.value,r,o),isOpen:g(()=>n.root.opened.value.has(s.value)),parent:g(()=>n.root.parents.value.get(s.value)),select:(r,o)=>n.root.select(s.value,r,o),isSelected:g(()=>n.root.selected.value.get(L(s.value))==="on"),isIndeterminate:g(()=>n.root.selected.value.get(s.value)==="indeterminate"),isLeaf:g(()=>!n.root.children.value.get(s.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(s.value,n.id.value,a),Me(()=>{!n.isGroupActivator&&n.root.unregister(s.value)}),a&&Y(z,i),i},Rn=()=>{const e=X(z,mt);Y(z,{...e,isGroupActivator:!0})};const _n=He("v-list-item-subtitle"),kn=He("v-list-item-title");const Cn=b({start:Boolean,end:Boolean,icon:U,image:String,...B(),...Xe(),...Je(),...tt(),...he(),...me(),...Ze({variant:"flat"})},"VAvatar"),Be=I()({name:"VAvatar",props:Cn(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=ge(e),{colorClasses:s,colorStyles:i,variantClasses:r}=et(e),{densityClasses:o}=Ye(e),{roundedClasses:h}=Ke(e),{sizeClasses:d,sizeStyles:m}=nt(e);return D(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,h.value,d.value,r.value,e.class],style:[i.value,m.value,e.style]},{default:()=>{var l;return[e.image?u(Xt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(oe,{key:"icon",icon:e.icon},null):(l=n.default)==null?void 0:l.call(n),Qe(!1,"v-avatar")]}})),{}}}),Tn=b({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:U,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:U,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Pe(),onClickOnce:Pe(),...Yt(),...B(),...Xe(),...We(),...en(),...Je(),...ln(),...he(),...me(),...Ze({variant:"text"})},"VListItem"),On=I()({name:"VListItem",directives:{Ripple:gn},props:Tn(),emits:{click:e=>!0},setup(e,a){let{attrs:n,slots:t,emit:s}=a;const i=on(e,n),r=g(()=>e.value===void 0?i.href.value:e.value),{select:o,isSelected:h,isIndeterminate:d,isGroupActivator:m,root:l,parent:c,openOnSelect:v}=wn(r,!1),p=hn(),x=g(()=>{var y;return e.active!==!1&&(e.active||((y=i.isActive)==null?void 0:y.value)||h.value)}),E=g(()=>e.link!==!1&&i.isLink.value),A=g(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||e.value!=null&&!!p)),Q=g(()=>e.rounded||e.nav),Z=g(()=>e.color??e.activeColor),ee=g(()=>({color:x.value?Z.value??e.baseColor:e.baseColor,variant:e.variant}));F(()=>{var y;return(y=i.isActive)==null?void 0:y.value},y=>{y&&c.value!=null&&l.open(c.value,!0),y&&v(y)},{immediate:!0});const{themeClasses:te}=ge(e),{borderClasses:ne}=Qt(e),{colorClasses:M,colorStyles:f,variantClasses:S}=et(ee),{densityClasses:P}=Ye(e),{dimensionStyles:H}=Fe(e),{elevationClasses:j}=tn(e),{roundedClasses:gt}=Ke(Q),ht=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ae=g(()=>({isActive:x.value,select:o,isSelected:h.value,isIndeterminate:d.value}));function ye(y){var G;s("click",y),!(m||!A.value)&&((G=i.navigate)==null||G.call(i,y),e.value!=null&&o(!h.value,y))}function pt(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),ye(y))}return D(()=>{const y=E.value?"a":e.tag,G=t.title||e.title,ft=t.subtitle||e.subtitle,be=!!(e.appendAvatar||e.appendIcon),yt=!!(be||t.append),Se=!!(e.prependAvatar||e.prependIcon),ie=!!(Se||t.prepend);return p==null||p.updateHasPrepend(ie),e.activeColor&&Rt("active-color",["color","base-color"]),re(u(y,{class:["v-list-item",{"v-list-item--active":x.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ie&&(p==null?void 0:p.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&x.value},te.value,ne.value,M.value,P.value,j.value,ht.value,gt.value,S.value,e.class],style:[f.value,H.value,e.style],href:i.href.value,tabindex:A.value?p?-2:0:void 0,onClick:ye,onKeydown:A.value&&!E.value&&pt},{default:()=>{var we;return[Qe(A.value||x.value,"v-list-item"),ie&&u("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?u(Ae,{key:"prepend-defaults",disabled:!Se,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=t.prepend)==null?void 0:C.call(t,ae.value)]}}):u(q,null,[e.prependAvatar&&u(Be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&u(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),u("div",{class:"v-list-item__spacer"},null)]),u("div",{class:"v-list-item__content","data-no-activator":""},[G&&u(kn,{key:"title"},{default:()=>{var C;return[((C=t.title)==null?void 0:C.call(t,{title:e.title}))??e.title]}}),ft&&u(_n,{key:"subtitle"},{default:()=>{var C;return[((C=t.subtitle)==null?void 0:C.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(we=t.default)==null?void 0:we.call(t,ae.value)]),yt&&u("div",{key:"append",class:"v-list-item__append"},[t.append?u(Ae,{key:"append-defaults",disabled:!be,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=t.append)==null?void 0:C.call(t,ae.value)]}}):u(q,null,[e.appendIcon&&u(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&u(Be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),u("div",{class:"v-list-item__spacer"},null)])]}}),[[Re("ripple"),A.value&&e.ripple]])}),{}}});export{Xe as A,We as B,Ze as C,Ye as D,Fe as E,zn as F,Vn as G,Be as H,ln as I,et as J,on as K,Qe as L,W as M,kn as N,Ie as O,gn as R,Xt as V,he as a,Yt as b,en as c,Je as d,En as e,Qt as f,tn as g,Ke as h,Ae as i,In as j,Ln as k,He as l,B as m,An as n,oe as o,Bn as p,On as q,Pn as r,Zt as s,Ve as t,D as u,Rn as v,wn as w,hn as x,$n as y,Nn as z};
