(function (window, document, location, navigator) {
    var currentScript = document.querySelector('script[src*="/resources/video/players"][src*="player"]'),
        basePath = currentScript.src.split('/').slice(0, 7).join('/'), //NOTE: should include environment path
        configUrl = basePath + '/player-configs/config/player.config.json',
        siteName = location.hostname.replace(/\b(dev|int|qa|stage|$)\b\./, '').split(/\W/)[0],
        pathName = location.pathname || '/',
        hashTag = location.hash || '#',
        queryString = location.search || '?',
        userAgent = navigator.userAgent || '';

    var modules = {
        ga:               '//www.google-analytics.com/....js',
        pbjs:             '//ads.rubiconproject.com/prebid/....js',
        muxjs:            '//cdn.jsdelivr.net/npm/mux.js@.../dist/mux.min.js',
        //jwplayer:         '//ssl.p.jwpcdn.com/player/v/.../jwplayer.js',
        jwplayer:         basePath + '/player-configs/vendor/jwplayer/.../jwplayer.js',
        jw_compatibility: basePath + '/player-configs/vendor/jwplayer/.../jwplayer.compatibility.js',
        //newrelic:         basePath + '/player-configs/vendor/newrelic/....newrelic.bundle.js',
        nrvideo:          basePath + '/player-configs/vendor/nrvideo/.../newrelic-video-jwplayer.min.js',
        //sinclairVideo:    basePath + '/dist/.../sinclair-video.js',
        bundle:           basePath + '/dist/.../bundle.js',
    };

    var userParams = parseUserAgent(userAgent);
    var queryParams = parseQueryString(queryString);
    var config = assignParams({}, [userParams, queryParams]);
    var paramStrings = stringifyParams(config);
    var readyEvent = createReadyEvent.call(document,'playerloaded', config);

    loadConfig().then(stationGroup).then(configureProps).then(loadModules);

    return readyEvent;

    function loadConfig() {
        return fetch(configUrl).then(parseJson);

        function parseJson(body) {
            return body && body.status && body.json() || {};
        }
    }

    function stationGroup(json) {
        var groups = json['$$'] || json['$'] || {};
        Object.keys(groups).forEach(setGroup);
        return json;

        function setGroup(key) {
            var group = groups[key];
            if (group.includes(siteName) || group.includes('*')) {
                config[key] = json[key];
            }
        }
    }

    function configureProps(json) {
        var propFilter = function (key) {return key[0] === '$'};
        var props = Object.keys(config).filter(propFilter);
        props.push('default', siteName, pathName, hashTag);
        for (var j = 0, prop; prop = props[j]; ++j) {
            var entry = json[config[prop]] || json[prop] || config[prop] || {};
            Object.keys(entry).forEach(setProp, entry);
        }
        return json;

        function setProp(key) {
            var index = null;
            switch (key[0]) {
                case '$': index = ~props.indexOf(key) ? -1 : 0; break;
                case '/': index = (pathName + '/').indexOf(key + '/'); break;
                case '#': index = hashTag.indexOf(key); break;
                case '&': index = paramStrings.indexOf(key); break;
            }
            if (~index) {
                this[key] = typeof this[key] === "string"
                    ? this[key].replace(/@\w+|$/g, replaceVars)
                    : this[key];
                config[key] = queryParams[key] || this[key];
                paramStrings += '&' + key + '=' + config[key];
                index != null && props.push(key);
            }
        }

        function replaceVars (prop) {
            return config[prop.slice(1)] || prop;
        }
    }

    function loadModules() {
        for (var m in modules) if (config[m] && !window[m]) {
            load(modules, m, new document.onplayerloaded);
        }

        function load(modules, m, callback) {
            var script = document.createElement('script');
            script.src = modules[m].replace('...', config[m]);
            script.onload = script.onerror = callback;
            script.async = true;
            script.charset = 'utf-8';
            currentScript.parentNode.insertBefore(script, currentScript);
        }
    }

    function createReadyEvent(type, detail) {
        var depends = 0;
        var event = document.createEvent('CustomEvent');
        var definition = {set: setEvent, get: function () {return getEvent}};

        event.source = this || document;
        event.initCustomEvent(type, true, true, detail);

        getEvent.then = setEvent; // Support promise-like behavior.
        getEvent.then(event.source['on' + event.type]); // Catch previous declared event handler.
        Object.defineProperty(event.source, 'on' + event.type, definition); // Define event handler on document.

        return event;

        function getEvent() {
            this.constructor === getEvent ? depends++ : depends && depends--; // Invoked with new?
            !depends && event.source && !event.eventPhase && event.source.dispatchEvent(event); // No dependencies.
            return getEvent;
        }

        function setEvent(handler) {
            event.source.addEventListener(event.type, handler, {once: true}); // Add event listener.
            !depends && event.target && !event.eventPhase && event.target.dispatchEvent(event); // Already fired.
            return setEvent;
        }
    }

    function parseUserAgent(ua) {
        return {
            browser:      ua.match('OPR|Edge|Edg|Chrome|Safari|Firefox|MSIE|jsdom|$')[0],
            brow_engine:  ua.match('WebKit|Trident|Presto|Goanna|Gecko|KHTML|Mozilla|Opera|$')[0],
            brow_version: ua.match('(Version|OPR|Edge|Edg|Chrome|Safari|Firefox|MSIE)[/: ]([0-9]+)|$')[2],
            env:          location.hostname.match(/\b(dev|int|qa|stage|$)\b/)[0] || 'prod',
            script_env:   currentScript.src.match(/\b(dev|int|qa|stage|$)\b/)[0] || 'prod',
            hardware:     ua.match('Mobi|Mini|Tablet|TV|$')[0] ? 'Mobile' : 'Desktop',
            iframe:       window.self !== window.top,
            slug:         siteName,
            split:        ['A', 'B'][Math.random() * 2 | 0],
            support:      'noModule' in document.createElement('script') ? 'Modern' : 'Legacy',
            system:       ua.replace(/iPod|iPhone|iPad/, 'iOS').match('Android|iOS|Windows|Mac|Linux|$')[0],
            sys_platform: ua.match('Windows.Phone|iPod|iPhone|iPad|$')[0]
        };
    }

    function parseQueryString(qs) {
        var params = {};
        var query = qs && qs.replace(/^[?&]/, '').split('&');
        for (var q in query) if (typeof query[q] === 'string') {
            parse(query[q]);
        }
        return params;

        function parse(param) {
            var p = param.split('=');
            p[1] = decodeURIComponent(p[1]);
            if (p[0]) try {
                params[p[0]] = JSON.parse(p[1]);
            } catch (e) {
                params[p[0]] = p[1];
            }
        }
    }

    function assignParams(target, sources) {
        sources.forEach(assigner);
        return target;

        function assigner(source) {
            Object.keys(source).forEach(assign);

            function assign(param) {
                target[param] = source[param];
            }
        }
    }

    function stringifyParams(target) {
        return Object.keys(target).map(stringify);

        function stringify(param) {
            return '&' + param + '=' + target[param];
        }
    }

    function fetch(url) {
        if (window.fetch) return window.fetch(url);
        var callbacks = [];
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.then = function (fn) {
            return callbacks.push(fn) && request;
        };
        request.onload = request.onerror = function () {
            return callbacks.reduce(request.chain, request);
        };
        request.chain = function (response, fn) {
            return fn(response);
        };
        request.json = function () {
            return JSON.parse(request.responseText);
        };
        request.text = function () {
            return JSON.stringify(request.responseText);
        };
        request.send();
        return request;
    }

})(window, document, location, navigator);

