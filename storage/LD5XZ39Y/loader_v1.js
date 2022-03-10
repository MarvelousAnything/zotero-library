(function() {
  if (window.nytg_loader_v1) return;
  window.nytg_loader_v1 = {
    packages: {},
    // called from inside module
    onload: function(name, module) {
      var pkg = this.packages[name];
      if (!pkg) {
        console.error("Module not found:", name);
        return;
      }
      var callbacks = pkg.callbacks || [];
      pkg.module = module;
      delete pkg.callbacks;
      callbacks.forEach(function(cb) {
        cb(module);
      });
    },
    // signature: function(name, [options,] callback)
    // option: url (overrides the default bundle url)
    require: function(name) {
      var pkg = this.packages[name];
      var defaultUrl = 'https://int.nyt.com/newsgraphics/dev/loader_v1/' + name + '.js';
      var script, cb, url, opts;
      if (typeof arguments[1] == 'function') {
        cb = arguments[1];
        url = defaultUrl;
      } else if (typeof arguments[2] == 'function') {
        opts = arguments[1] || {};
        url = opts.url || defaultUrl;
        cb = arguments[2];
      } else {
        throw new Error("require() is missing a callback");
      }
      // TODO: check that the module name is not used to load more than one URL
      if (pkg && pkg.module) {
        cb(pkg.module);
      } else if (pkg) {
        pkg.callbacks.push(cb);
      } else {
        this.packages[name] = {
          url: url,
          callbacks: [cb]
        };
        script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script).parentNode.removeChild(script);
      }
    }
  };
}());
