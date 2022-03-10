const _getLocation = function(href) {
    let l = document.createElement("a");
    l.href = href;
    return l;
};
const _script = document.currentScript;
const _fullUrl = _script.src;
const _l = _getLocation(_fullUrl);

var __cjp = 'https://edata.ndtv.com/assembly/2022/march/config.json';
if(_l.hostname == 'localhost') {
    __cjp = 'http://localhost/ppv/public/e/assembly/2022/march/static/json/local-config.json';
} else if(_l.hostname == 's-cdn.ndtv.com') {
    __cjp = 'https://edata.ndtv.com/assembly/2022/march/stage-config.json';
} else {
    __cjp = 'https://edata.ndtv.com/assembly/2022/march/config.json';
}

__loadStyle = function(url) {
    return new Promise((resolve, reject) => {
      let link    = document.createElement('link');
      link.type   = 'text/css';
      link.rel    = 'stylesheet';
      link.onload = () => { resolve(); console.log('style has loaded'); };
      link.href   = url;
  
      let headScript = document.querySelector('script');
      headScript.parentNode.insertBefore(link, headScript);
    });
  };
  
function __loadScript(url) {
      return new Promise(function(resolve, reject) {
              let script = document.createElement('script');
              script.src = url;
              script.async = false;
              script.onload = function() {
                      resolve(url);
              };
              script.onerror = function() {
                      reject(url);
              };
              document.body.appendChild(script);
      });
  }

fetch(__cjp)
.then(response => response.json())
.then((data) => {
    _confJsonData = data;
    __loadStyle(_confJsonData.cssPath + 'jquery.bookblock.css?ver='+_confJsonData.ver).then(() => {
        let promises = [];
        _alljsscripts = [];
        _alljsscripts.push(_confJsonData.cssJSUrlComm + 'book-flip/flipCombine.js?ver='+_confJsonData.ver);
        _alljsscripts.push(_confJsonData.cssJSUrlComm + 'book-flip/jquery.ui.min.js?ver='+_confJsonData.ver);
        _alljsscripts.push(_confJsonData.widgetJS + 'dtype/dtype_flip.js?ver='+_confJsonData.ver);
        _alljsscripts.forEach(function(url) {
            promises.push(__loadScript(url));
        });
        Promise.all(promises)
        .then(function() {
            console.log('all scripts loaded');
            //__bookflipInitialize();
            jQuery(document).ready(function () {
                jQuery('.bb-container').draggable();
            });
        }).catch(function(script) {
            console.log(script + ' failed to load');
        });
    }).catch(()=>{
        alert('not loaded');
    });
});