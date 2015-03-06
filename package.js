Package.describe({
  name: "uzumaxy:jstree",
  summary: "jQuery tree plugin for MeteorJS.",
  version: "3.0.9-1",
  git: "https://github.com/uzumaxy/meteor-jstree"
});

Package.onUse(function(api) {

  api.use([
    'jquery@1.0.1'
  ], 'client');

  api.addFiles([
    'uzumaxy:jstree/js/jstree.js',
    'uzumaxy:jstree/css/style.css'
  ], 'client');

  api.addFiles([
    'uzumaxy:jstree/img/32px.png',
    'uzumaxy:jstree/img/40px.png',
    'uzumaxy:jstree/img/throbber.gif'
  ], 'client', {isAsset: true});

});
