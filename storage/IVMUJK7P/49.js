(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{Q1qA:function(e,t,a){"use strict";a.r(t);var r=a("rePB"),l=a("q1tI"),s=a.n(l),i=a("LlPT"),n=a("rbcV"),o=a("0fTL"),c=a.n(o),d=a("Iwx7"),u=a("LqsV"),b=a("lnev"),m=a("FVZ7"),p=a("6w/R"),g=a("j0MY"),v=a("PITc"),f=a("q0Y5"),h=a("uZIS"),w=a("WF+G"),y=a("hs8z"),O=a("BP2f"),j=a("775v"),N=a("a6RD"),k=a.n(N),x=a("VO36"),P=a("5J20"),q=a("tztA"),C=a("JSGl"),S=a("4hoM"),L=a("rZF8"),R=a("Ei4q"),E=a("J983"),H=s.a.createElement,D=function(e){var t=e.feeds,a=e.linkClasses,r=e.delimiter,s=e.delimiterClasses;return Object.keys(t).map((function(e,i){var n=function(e,t){var a,r;return"apple"===e?(a="Apple Podcasts",r="https://itunes.apple.com/us/podcast/id".concat(t,"?mt=2&at=1001lvyS&ct=articlerr")):"google"===e&&(a="Google Podcasts",r="https://www.google.com/podcasts?feed=".concat(t)),{name:a,url:r}}(e,t[e]),o=n.name,c=n.url;return o&&c?H(l.Fragment,{key:o},i>0&&H("span",{className:s},r),H("a",{className:"".concat(e," ").concat(a),href:c},o)):null}))};D.defaultProps={feeds:{},linkClasses:"",delimiter:", ",delimiterClasses:""};var A=D,T=s.a.createElement;function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={title:"Post Reports",description:"The Washington Post's daily podcast: unparalleled reports, expert insight, clear analysis. For your ears.",smallLogo:"/resources/images/post-reports-circular.png",feeds:{apple:"1444873564",google:"aHR0cHM6Ly9wb2RjYXN0LnBvc3R0di5jb20vaXR1bmVzL3Bvc3QtcmVwb3J0cy54bWw"},url:"https://www.washingtonpost.com/podcasts/post-reports/",rrTrackingKey:"postreportslnch"},J=function(e){var t=e.rightRail,a=Object(i.c)(),r=a.contextPath,l=a.deployment,s=I,n=s.title,o=s.description,c=s.smallLogo,d=s.feeds,u=s.rrTrackingKey,b=s.url,m={prefix:"aud",idFirst:"rr",idSecond:u},p=Object(E.a)(F({url:b},m)),g=Object(E.a)(F({url:"https://www.washingtonpost.com/podcasts/"},m));return T(R.a,{eager:!1},T("div",{className:"podcast-promo".concat(t?"-rr pb-lgmod b bb mb-lg-mod dn db-l font-xxs bold":""," hide-for-print"),"data-qa":"podcast-promo"},T("div",{className:"font--subhead font-xxxs flex mb-xs"},T(L.Headphones16,{className:"mr-xs",fill:"gray-darkest"}),T("a",{className:"internal gray-darkest hover-blue lh-initial",href:g},"Podcast")),T("a",{href:p,className:"internal"},T("div",{className:"font--subhead font-sm gray-darkest hover-blue"},n)),T("div",{className:"cb overflow-hidden"},T("a",{href:p,className:"ml-sm fr internal"},T("img",{src:"".concat(r).concat(c,"?d=").concat(l),width:"88",height:"88",alt:"Promo"})),T("div",{className:"font--meta-text light gray-dark mt-xs"},o),T("div",{className:"font--subhead mt-xs gray-dark"},"Add to ",T(A,{feeds:d,linkClasses:"gray-darkest hover-blue"})))))},K=a("6U2b"),M=a("bAcS"),V=a("4BgG"),_=a("wcSx"),G=a("7EFy"),U=a("Xc4q"),W=a("36e9"),Q=s.a.createElement,Z=function(e){var t=e.rightRail,a=void 0!==t&&t;return Q(q.a,null,Q(W.a,{rightRail:a,newsletterID:"post_newsletter450",newsletterName:"Voraciously's Essential Cookbooks email series",newsletterBlurb:"Our 10-week series is the cookbook club you've been waiting for. Sample recipes from our 10 desert-island titles\u2060\u2014then decide what to add to your shelf.","data-qa":"cookbook-newsletter"}))},z=s.a.createElement,X=function(e){var t=e.user;return z("div",{className:"pb-lgmod mb-lg-mod b bb","data-qa":"twitter-weather"},z("a",{className:"twitter-timeline",href:"https://twitter.com/capitalweather?ref_src=twsrc%5Etfw","data-tweet-limit":"3"},"Tweets by @",t),z("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}))},Y=s.a.createElement,$=function(e){var t=e.type,a=e.title,r=e.tableData,s=e.featured,i=e.link;return Y("div",{className:"b bc-gray-lighter brad-4 pa-sm mb-lg-mod","data-qa":"".concat(t,"-tracker")},a&&Y("h5",{className:"font--subhead bold font-sm","data-qa":"title"},a),s&&Y("div",{className:"flex items-center"},Y("span",{className:"bold font-md3 mr-sm","data-qa":"heat"===t?"days-over-90":"current-snow"},s),Y("span",null,"heat"===t?"90-degree days so far":"Current total snowfall")),Y("table",{className:"w-100"},Y("tbody",null,r.map((function(e){return Y(l.Fragment,{key:e.label},e.label&&e.value?Y("tr",null,Y("td",{className:"bold"},e.label),Y("td",{"data-qa":e.qaLabel||null},e.value)):null)})),i&&i.text&&i.url&&Y("tr",null,Y("td",{className:"pt-sm link blue hover-blue font--meta-text font-xxs font-bold"},Y("a",{href:i.url},i.text))))))},ee=s.a.createElement,te=function(){for(var e,t,a,r=Object(n.a)({source:"google-sheets",query:{id:"1zHviCuOSkQHWlBgBBLk6JUX5ca1KnM8C-6cUkpuctfg"}})||[],l=["current total snowfall","Average seasonal snow","Last year's snow","Record most snow","Record least snow"],s=(null===r||void 0===r?void 0:r.rows)||[],i=(null===r||void 0===r?void 0:r.cols)||[],o=[],c=2;c<l.length+2;c+=1){var d,u,b;o.push({label:l[c-2],value:"".concat((null===(d=s[0])||void 0===d?void 0:null===(u=d.c[c])||void 0===u?void 0:u.v)||0,'"'),qaLabel:"snowtracker-".concat(null===(b=i[c])||void 0===b?void 0:b.label)})}if(!o.length)return null;var m=o.shift();return o.unshift({label:"Average season-to-date snow",value:"".concat((null===(e=s[0])||void 0===e?void 0:null===(t=e.c[10])||void 0===t?void 0:t.v)||0,'"'),qaLabel:"snowtracker-".concat(null===(a=i[10])||void 0===a?void 0:a.label)}),ee($,{title:"Washington, D.C., Snow Tracker",tableData:o,featured:m&&m.value,type:"snow",link:{text:"See the winter outlook",url:"/weather/2021/11/10/dc-winter-outlook-2021-2022/"}})},ae=a("MuK1"),re=a("AeTi"),le=a("PY7j"),se=a("N0jo"),ie=s.a.createElement,ne=k()((function(){return Promise.all([a.e(0),a.e(65)]).then(a.bind(null,"6k/N"))}),{loadableGenerated:{webpack:function(){return["6k/N"]},modules:["../../features/article/body/_children/recirc-luf-rail"]}}),oe=function(e){var t=e.globalContent,a=void 0===t?{}:t,r=Object(l.useContext)(G.b).articleProperties,s=r.isKidspost,i=r.isLiveArticle,o=r.isCenteredLayout,c=r.useGrid,d=r.isVoraciously,u=(Object(b.d)()||!1).isAdFreeSub,m=Object(V.pb)(a),p=Object(V.lb)(a),g=Object(V.eb)(a),v=Object(ae.b)(),f=Object(V.jb)(a),h=s?J:d?Z:S.b,w=Object(P.a)(),y=!1,O=Object(n.a)({source:"luf-recirculation",query:{live_limit:5,section:"politics"}}),j=Object(re.c)(re.a.operationRunwayStaging),N=Object(re.c)(re.a.operationRunwayProd),k=Object(se.a)(j,N),L=!o&&!w&&!i&&!m&&!s&&!d,E=function(e){var t=e.variant,a=e.children;return L&&k===t?ie("div",{className:Object(x.getClasses)("dn db-ns",{"b bt bc-black":"2"===t}),style:{minHeight:"715px"},"data-qa":"right-rail-item"},ie("div",{className:Object(x.getClasses)("",{"b bb":"2"===t})},ie(le.a,null))):a};if(f&&!i){var H=Object(V.Q)(null===O||void 0===O?void 0:O.items[0]);(null===O||void 0===O?void 0:O.items.length)&&!H&&(y=!0)}return ie(q.a,null,ie("aside",{className:Object(x.getClasses)("flex flex-column",{"hide-for-print right-rail flex-1 mt-md-l col-4-lg":!c,"h-100":c}),"data-qa":"right-rail"},!u&&!s&&ie(q.a,null,ie("div",{className:Object(x.getClasses)("pb-lg-mod",{"b bb bc-gray-darkest":!w}),"data-qa":"right-rail-item"},ie(K.a,{flexNum:1}))),ie(q.a,null,ie("div",{className:"dn db-ns mb-lg-mod b bb",style:{minHeight:"715px"},"data-qa":"right-rail-item"},ie(E,{variant:"1"},ie(C.a,null)))),m&&ie(q.a,null,ie("div",{"data-qa":"right-rail-item"},ie(te,null))),!u&&!s&&!p&&ie(q.a,null,ie("div",{"data-qa":"right-rail-item",className:"pb-lg-mod"},ie(K.a,{flexNum:2}))),y&&ie(q.a,null,ie(ne,{content:O,section:"politics"})),ie(q.a,null,ie(E,{variant:"2"},ie("div",{style:{minHeight:"620px"}},!s&&!i&&!v&&!y&&ie("div",{className:"dn db-ns mb-lg-mod b bb",style:{minHeight:"220px"},"data-qa":"right-rail-item"},ie(U.a,{globalContent:a,rightRail:!0})))),ie(ae.a,{globalContent:a})),!u&&!s&&!p&&ie(q.a,null,ie("div",{className:Object(x.getClasses)("pb-lg-mod",{"bc-gray-darkest":!d&&!w,"mb-lg-mod-ns":d,"b bb":!w}),"data-qa":"right-rail-item"},ie(K.a,{flexNum:4}))),ie(q.a,null,ie("div",{className:"dn db-ns mb-lg-mod b bb",style:{minHeight:d||s?null:"715px"},"data-qa":"right-rail-item"},ie(R.a,{eager:!1},ie(E,{variant:"3"},ie(h,{rightRail:!0}))))),m&&ie(q.a,null,ie(X,{user:"capitalweather","data-qa":"right-rail-item"})),g&&ie(q.a,null,ie("div",{"data-qa":"right-rail-item"},ie(_.a,{isRightRail:!0,sponsorImages:M.b,sponsorTexts:M.c,"data-qa":"right-rail-item"}))),!u&&!s&&ie(q.a,null,ie("div",{"data-qa":"right-rail-item",className:"dn db-ns",style:{minHeight:1050,flex:"1"}},ie(K.a,{flexNum:3,noMinHeight:!0})))))},ce=a("6GKZ"),de=a("bRWJ"),ue=a("5KeO"),be=a("TBkl"),me=a("wget"),pe=s.a.createElement;function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ve=Object(v.a)(me.a,g.a,p.b),fe=function(){var e,t=Object(i.b)(),a=t.siteProperties,l=t.globalContent,s=t.requestUri,n=Object(G.e)().articleProperties,o=n.section,c=n.parentSectionId,d=n.isLiveArticle,p=n.vertical,g=""!==p,v="politics"===o.toLowerCase()||c.includes("politics");e=g?"vertical":v?"politics":"normal";var w=d,N=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,{content_elements:ve(null===l||void 0===l?void 0:l.content_elements)});Object(f.a)(h.a,[]);var k=Object(b.d)();return pe(u.a,null,pe(de.a,null,pe(y.b,{type:e,vertical:p}),pe(ue.a,null),pe("div",{className:"grid-layout"},pe("main",{className:"grid-main"},pe(u.a,null,pe("div",{className:"grid-full-inner"},pe(m.a,null),pe(O.a,{type:e,isLive:w,globalContent:l,siteProperties:a,requestUri:s})),pe("article",{className:"grid-article mb-xxl-ns","data-qa":"main"},pe(j.a,{isSubscriber:k.isSub,type:e,isLive:w,globalContent:N,siteProperties:a,requestUri:s,grid:!0})),pe("div",{className:"grid-rail"},pe(oe,{globalContent:l,grid:!0}))))),pe(ce.default,null)))},he=function(e){var t=Object(n.a)({source:"site-homepage",filter:w.a})||{site:{}},a=Object(i.b)().globalContent;return pe(d.a,null,pe(u.a,null,pe(be.a,{isAuthorPage:!1},pe(fe,e)),pe(c.a,{globalContent:a,siteSubsData:t})))};he.sections=["main","sidebar"];t.default=he},rZF8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("MaCT");a("y1ux"),a("17x9"),a("q1tI"),a("aK8S"),a("ASHQ"),t.Headphones16=r.Headphones16}}]);
//# sourceMappingURL=49.e073f15d745a88dea38c.js.map