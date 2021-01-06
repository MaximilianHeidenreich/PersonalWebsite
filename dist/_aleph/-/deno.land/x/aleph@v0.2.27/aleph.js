import{__awaiter}from"../aleph/tsc/tslib.js";import React,{useCallback,useEffect,useRef,useState}from"../../../esm.sh/react.js";import{RouterContext}from"./context.js";import{E400MissingDefaultExportAsComponent,E404Page,ErrorBoundary}from"./error.js";import events from"./events.js";import{createPageProps}from"./routing.js";import util,{hashShort,reHttp}from"./util.js";export function ALEPH({initial:e}){const t=useRef({routing:e.routing});const[o,n]=useState(()=>{const{E404:t}=e.components;if(t){if(util.isLikelyReactComponent(t)){return{Component:t}}return{Component:E400MissingDefaultExportAsComponent,props:{name:"Custom 404 Page"}}}return{Component:E404Page}});const[r,s]=useState(()=>{const{App:t}=e.components;if(t){if(util.isLikelyReactComponent(t)){return{Component:t}}return{Component:E400MissingDefaultExportAsComponent,props:{name:"Custom App"}}}return{Component:null}});const[i,a]=useState(()=>{const{url:t,pageComponentTree:o}=e;return Object.assign(Object.assign({},createPageProps(o)),{url:t})});const l=useCallback(e=>__awaiter(this,void 0,void 0,(function*(){const{routing:o}=t.current;const{baseUrl:n}=o;const[r,s]=o.createRouter();if(r.pagePath!==""){const t=s.map(({id:e})=>({id:e}));const o=s.map(o=>__awaiter(this,void 0,void 0,(function*(){const{default:s}=yield import(getModuleImportUrl(n,o,e.forceRefetch));if(o.deps){for(const t of o.deps.filter(({isStyle:e})=>!!e)){yield import(getModuleImportUrl(n,{id:util.ensureExt(t.url.replace(reHttp,"/-/"),".js"),hash:t.hash},e.forceRefetch))}if(o.deps.filter(({isData:e,url:t})=>!!e&&t.startsWith("#useDeno.")).length>0){const{default:t}=yield import(`/_aleph/data${[r.pathname,r.query.toString()].filter(Boolean).join("@")}/data.js`+(e.forceRefetch?`?t=${Date.now()}`:""));if(util.isPlainObject(t)){for(const e in t){const o=`useDeno://${r.pathname}?${r.query.toString()}#${e}`;Object.assign(window,{[o]:t[e]})}}}}const i=t.find(e=>e.id===o.id);if(i){i.Component=s}})));yield Promise.all(o);a(Object.assign(Object.assign({},createPageProps(t)),{url:r}));if(e.resetScroll){window.scrollTo(0,0)}}else{a({Page:null,pageProps:{},url:r})}})),[t]);useEffect(()=>{window.addEventListener("popstate",l);events.on("popstate",l);return()=>{window.removeEventListener("popstate",l);events.off("popstate",l)}},[l]);useEffect(()=>{const{routing:e}=t.current;const{baseUrl:o}=e;const r=e=>__awaiter(this,void 0,void 0,(function*(){switch(e.id){case"/404.js":{const{default:t}=yield import(getModuleImportUrl(o,e,true));if(util.isLikelyReactComponent(t)){n({Component:t})}else{n({Component:E404Page})}break}case"/app.js":{const{default:t}=yield import(getModuleImportUrl(o,e,true));if(util.isLikelyReactComponent(t)){s({Component:t})}else{s({Component:E400MissingDefaultExportAsComponent,props:{name:"Custom App"}})}break}default:{if(e.id.startsWith("/pages/")){const{routing:o}=t.current;o.update(e);events.emit("popstate",{type:"popstate",forceRefetch:true})}break}}}));const i=e=>{switch(e){case"/404.js":n({Component:E404Page});break;case"/app.js":s({Component:null});break;default:if(e.startsWith("/pages/")){const{routing:o}=t.current;o.removeRoute(e);events.emit("popstate",{type:"popstate"})}break}};const a=({href:t})=>__awaiter(this,void 0,void 0,(function*(){const[n,r]=t.split("?");const[s,i]=e.createRouter({pathname:n,search:r});if(s.pagePath!==""){const e=i.map(e=>__awaiter(this,void 0,void 0,(function*(){yield import(getModuleImportUrl(o,e));if(e.deps){for(const t of e.deps.filter(({isStyle:e})=>!!e)){yield import(getModuleImportUrl(o,{id:util.ensureExt(t.url.replace(reHttp,"/-/"),".js"),hash:t.hash}))}if(e.deps.filter(({isData:e,url:t})=>!!e&&t.startsWith("#useDeno.")).length>0){const{default:e}=yield import(`/_aleph/data${[s.pathname,s.query.toString()].filter(Boolean).join("@")}/data.js`);if(util.isPlainObject(e)){for(const t in e){const o=`useDeno://${s.pathname}?${s.query.toString()}#${t}`;Object.assign(window,{[o]:e[t]})}}}}})));yield Promise.all(e)}}));events.on("add-module",r);events.on("remove-module",i);events.on("fetch-page-module",a);return()=>{events.off("add-module",r);events.off("remove-module",i);events.off("fetch-page-module",a)}},[t]);useEffect(()=>{var e,t;const o=window;const{location:n,document:r,scrollX:s,scrollY:i,hashAnchorScroll:a}=o;if(n.hash){const l=r.getElementById(n.hash.slice(1));if(l){const{left:n,top:r}=l.getBoundingClientRect();o.scroll({top:r+i-(((e=a===null||a===void 0?void 0:a.offset)===null||e===void 0?void 0:e.top)||0),left:n+s-(((t=a===null||a===void 0?void 0:a.offset)===null||t===void 0?void 0:t.left)||0),behavior:a===null||a===void 0?void 0:a.behavior})}}},[i]);return React.createElement(ErrorBoundary,null,React.createElement(RouterContext.Provider,{value:i.url},...[i.Page&&r.Component&&React.createElement(r.Component,Object.assign({},r.props,{Page:i.Page,pageProps:i.pageProps})),i.Page&&!r.Component&&React.createElement(i.Page,i.pageProps),!i.Page&&React.createElement(o.Component,o.props)].filter(Boolean)))}export function getModuleImportUrl(e,t,o=false){return util.cleanPath(e+"/_aleph/"+(t.id.startsWith("/-/")?t.id:util.trimSuffix(t.id,".js")+`.${t.hash.slice(0,hashShort)}.js`)+(o?`?t=${Date.now()}`:""))}export function redirect(e,t){return __awaiter(this,void 0,void 0,(function*(){const{location:o,history:n}=window;if(!util.isNEString(e)){return}if(util.isHttpUrl(e)){o.href=e;return}e=util.cleanPath(e);if(t){n.replaceState(null,"",e)}else{n.pushState(null,"",e)}events.emit("popstate",{type:"popstate",resetScroll:true})}))}