"use strict";(self.webpackChunkeuronews=self.webpackChunkeuronews||[]).push([[2889],{95725:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createInjector=void 0;const r=s(33030),n=s(98583),o=s(89665),i=s(23482),a=r.Scope.Singleton;class c{constructor(){this.childInjectors=new Set,this.isDisposed=!1}async injectClass(e,t){this.throwIfDisposed(e);try{return new e(...await this.resolveParametersToInject(e,t))}catch(s){throw o.InjectionError.create(e,s)}}async injectAsyncClass(e,t){this.throwIfDisposed(e);try{const s=await e();return new s(...await this.resolveParametersToInject(s,t))}catch(s){throw o.InjectionError.create(e,s)}}async injectFunction(e,t){this.throwIfDisposed(e);try{const s=await this.resolveParametersToInject(e,t);return await e(...s)}catch(s){throw o.InjectionError.create(e,s)}}resolveParametersToInject(e,t){const s=e.inject||[];return Promise.all(s.map((async s=>{switch(s){case n.TARGET_TOKEN:return t;case n.INJECTOR_TOKEN:return this;default:return await this.resolveInternal(s,e)}})))}provideValue(e,t){this.throwIfDisposed(e);const s=new h(this,e,t);return this.childInjectors.add(s),s}provideClass(e,t,s=a){this.throwIfDisposed(e);const r=new p(this,e,s,t);return this.childInjectors.add(r),r}provideAsyncClass(e,t,s=a){this.throwIfDisposed(e);const r=new g(this,e,s,t);return this.childInjectors.add(r),r}provideFactory(e,t,s=a){this.throwIfDisposed(e);const r=new u(this,e,s,t);return this.childInjectors.add(r),r}async resolve(e,t){return this.throwIfDisposed(e),await this.resolveInternal(e,t)}throwIfDisposed(e){if(this.isDisposed)throw new o.InjectorDisposedError(e)}removeChild(e){this.childInjectors.delete(e)}async dispose(){if(!this.isDisposed){this.isDisposed=!0;const e=[];for(const t of this.childInjectors)e.push(t.dispose());await Promise.all(e),await this.disposeInjectedValues()}}}class l extends c{resolveInternal(e){throw new Error(`No provider found for "${e}"!.`)}disposeInjectedValues(){return Promise.resolve()}}class d extends c{constructor(e,t,s){super(),this.parent=e,this.token=t,this.scope=s,this.disposables=new Set}async dispose(){this.parent.removeChild(this),await super.dispose()}async disposeInjectedValues(){const e=[...this.disposables.values()].map((e=>e.dispose()));await Promise.all(e)}async resolveInternal(e,t){if(e!==this.token)return await this.parent.resolve(e,t);if(this.cached)return this.cached.value;try{const e=await this.result(t);return this.addToCacheIfNeeded(e),e}catch(s){throw o.InjectionError.create(e,s)}}addToCacheIfNeeded(e){this.scope===r.Scope.Singleton&&(this.cached={value:e})}registerProvidedValue(e){return(0,i.isDisposable)(e)&&this.disposables.add(e),e}}class h extends d{constructor(e,t,s){super(e,t,r.Scope.Transient),this.value=s}result(){return this.value}}class u extends d{constructor(e,t,s,r){super(e,t,s),this.injectable=r}async result(e){return this.registerProvidedValue(await this.parent.injectFunction(this.injectable,e))}}class p extends d{constructor(e,t,s,r){super(e,t,s),this.injectable=r}async result(e){return this.registerProvidedValue(await this.parent.injectClass(this.injectable,e))}}class g extends d{constructor(e,t,s,r){super(e,t,s),this.injectable=r}async result(e){return this.registerProvidedValue(await this.parent.injectAsyncClass(this.injectable,e))}}t.createInjector=function(){return new l}},86711:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},39657:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},39394:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},18968:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},98583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TARGET_TOKEN=t.INJECTOR_TOKEN=void 0,t.INJECTOR_TOKEN="$injector",t.TARGET_TOKEN="$target"},81552:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},33030:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Scope=void 0,function(e){e.Transient="transient",e.Singleton="singleton"}(t.Scope||(t.Scope={}))},87615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},89665:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InjectionError=t.InjectorDisposedError=t.TypedInjectError=void 0;class s extends Error{}function r(e){return"function"==typeof e?"inject":"resolve"}function n(e){return"function"==typeof e?e.toString().startsWith("class")?`[class ${e.name||"<anonymous>"}]`:`[function ${e.name||"<anonymous>"}]`:`[token "${String(e)}"]`}t.TypedInjectError=s;t.InjectorDisposedError=class extends s{constructor(e){super(`Injector is already disposed. Please don't use it anymore. Tried to ${r(e)} ${n(e)}.`)}};class o extends s{constructor(e,t){super(`Could not ${r(e[0])} ${e.map(n).join(" -> ")}. Cause: ${t.message}`),this.path=e,this.cause=t}static create(e,t){return t instanceof o?new o([e,...t.path],t.cause):new o([e],t)}}t.InjectionError=o},68514:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),n=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),n(s(39394),t),n(s(86711),t),n(s(98583),t),n(s(18968),t),n(s(81552),t),n(s(33030),t),n(s(87615),t),n(s(95725),t),n(s(89665),t),n(s(63709),t),n(s(39657),t)},63709:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tokens=void 0,t.tokens=function(...e){return e}},23482:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isDisposable=void 0,t.isDisposable=function(e){const t=e;return t&&t.dispose&&"function"==typeof t.dispose}},49428:(e,t,s)=>{s.d(t,{Z:()=>d});var r,n=s(30763);!function(e){e.DEBUG="debug",e.LOG="log",e.WARN="warn",e.ERROR="error"}(r||(r={}));class o{constructor(e){this.date=new Date,this.level=e.level||r.LOG,this.source=e.source,this.message=e.message,this.details=e.details,this.error=e.error,this.data=e.data}toJsonString(){var e,t,s;return JSON.stringify({level:this.level,source:this.source,date:this.date.toISOString(),message:this.message,details:this.details,error:this.error?{message:null===(e=this.error)||void 0===e?void 0:e.message,stack:null===(t=this.error)||void 0===t?void 0:t.stack,name:null===(s=this.error)||void 0===s?void 0:s.name}:void 0,data:this.data})}}class i{constructor({source:e,minLevel:t=r.LOG}={}){this.minLevel=r.LOG,this.source=e,this.minLevel=t}formatMessage(e){let t="[".concat(e.level.toUpperCase(),"] ");return e.source&&(t+="[".concat(e.source,"]: ")),t+=e.message,t}_log(e,t,s){const r=new o({...s,level:t,message:e,source:this.source}),n=this.formatMessage(r),i={};r.error&&(i.error=r.error),r.details&&(i.details=r.details),r.data&&(i.data=r.data),0===Object.keys(i).length?console[r.level](n):console[r.level](n,i)}debug(e,t){r.DEBUG===this.minLevel&&this._log(e,r.DEBUG,t)}log(e,t){[r.DEBUG,r.LOG].includes(this.minLevel)&&this._log(e,r.LOG,t)}warn(e,t){[r.DEBUG,r.LOG,r.WARN].includes(this.minLevel)&&this._log(e,r.WARN,t)}error(e,t){this._log(e,r.ERROR,t)}}var a=s(91609),c=s(50412);class l{constructor(){this._logger=new i({minLevel:l.isProduction?r.ERROR:r.DEBUG}),this._contexts=l.resolveContexts(),this.oldApp=new c.default,l.initPromsie=this.init()}static getInstance(){return l._instance?l.initPromsie:l.newInstance()}static getInstanceSync(){return l._instance||l.newInstance(),l._instance}static newInstance(){return l._instance=new l,l.initPromsie}static get logger(){return l._instance._logger}static get contexts(){return l._instance._contexts}static get instance(){return l._instance}get logger(){return this._logger}get contexts(){return this._contexts}async init(){this.logger.debug("App: Initializing...");const e=[];for(const t of this.contexts)this.logger.debug("   => loading context ".concat(t,"...")),e.push(this.loadContext(t));return await Promise.all(e),this.logger.debug("App: Initialized ✅"),this}async loadContext(e){let t;this.oldApp.loadByContextName(e);try{t=await this.getContextService(e)}catch(s){return"string"==typeof s?this.logger.warn('Cannot load context "'.concat(e,'": ').concat(s)):this.logger.error("CRITICAL",{error:s})}try{await t.init()}catch(s){let t='Error while loading context "'.concat(e,'": ');"string"==typeof s?t+=s:s instanceof Error&&(t+=s.message),this.logger.error(t,{error:s})}}async reloadContext(e){let t;try{t=await this.getContextService(e)}catch(s){return"string"==typeof s?this.logger.warn('Cannot reload context "'.concat(e,'": ').concat(s)):this.logger.error("CRITICAL",{error:s})}try{await t.reset()}catch(s){let t='Error while reloading context "'.concat(e,'": ');"string"==typeof s?t+=s:s instanceof Error&&(t+=s.message),this.logger.error(t,{error:s})}}async getContextService(e){const t=(0,n.l)(e);try{return await n.Z.resolve(t)}catch(s){return Promise.reject('Service "'.concat(t,'" not found in AppContainer'))}}static resolveContexts(){let e=[];e.push(a.s.Main);try{const t=document.head.querySelector("meta[name=app-contexts]")||{};t.content&&(e=[...e,...JSON.parse(t.content||"[]")])}catch(s){l.logger.error("error while parsing meta[name=app-contexts].content")}const t=document.head.querySelector("meta[name=app-context]")||{};return t.content&&e.push(t.content),e}}l.isProduction=/^[a-z]*\.?euronews\.com$/.test(window.location.hostname),l.getInstance().then((()=>l.logger.debug("Auto instantiated App now ready")));const d=l},30763:(e,t,s)=>{s.d(t,{l:()=>i,Z:()=>a});var r=s(68514),n=s(49428),o=s(91609);function i(e){return"context.".concat(e)}const a=(0,r.createInjector)().provideFactory("app",(()=>n.Z.getInstanceSync())).provideFactory("logger",(()=>n.Z.logger)).provideAsyncClass("adobe.analytics",(async()=>(await s.e(3876).then(s.bind(s,53876))).default)).provideAsyncClass("google.analytics",(async()=>(await s.e(3051).then(s.bind(s,13051))).default)).provideAsyncClass("didomi",(async()=>(await s.e(5186).then(s.bind(s,25186))).default)).provideAsyncClass("google.gpt",(async()=>(await s.e(2233).then(s.bind(s,12233))).default)).provideAsyncClass("justin",(async()=>(await Promise.all([s.e(9755),s.e(3846)]).then(s.bind(s,83846))).default)).provideAsyncClass("geo.geolocation",(async()=>(await Promise.resolve().then(s.bind(s,87159))).default)).provideAsyncClass(i(o.s.Main),(async()=>(await s.e(9925).then(s.bind(s,89925))).default))},91609:(e,t,s)=>{var r,n;s.d(t,{s:()=>r}),function(e){e.Home="home",e.Main="main",e.Article="article",e.Video="video",e.EmbedVideo="embed-video",e.Newsletter="newsletter",e.EmbedNewsletter="embed-newsletter",e.EmbedTimeline="embed-timeline",e.Amp="amp",e.Page="page",e.NoComment="no-comment",e.HotTopic="hot-topic",e.Live="live",e.Playlist="playlist",e.Showroom="showroom"}(r||(r={})),function(e){e.MainNormal="main",e.MainEmbed="main-embed",e.EmbedVideo="embed-video",e.EmbedNewsletter="embed-newsletter",e.EmbedJustin="embed-timeline",e.EmbedWeather="embed-weather",e.Home="home",e.Article="article",e.Landing="landing",e.Weather="weather",e.Justin="justin",e.Search="search",e.Showroom="showroom",e.Bulletin="bulletin",e.Live="live",e.Static="static",e.ArticleText="article-text",e.ArticleVideo="article-video"}(n||(n={}))}}]);