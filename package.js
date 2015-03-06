Package.describe({
  name: "uzumaxy:jstree",
  summary: "jQuery tree plugin for MeteorJS.",
  version: "3.0.9-2",
  git: "https://github.com/uzumaxy/meteor-jstree"
});

Package.onUse(function(api) {

  api.use([
    'jquery@1.0.1'
  ], 'client');

  api.addFiles([
    'uzumaxy:jstree/jstree.js',
    'uzumaxy:jstree/style.css'
  ], 'client');

  api.addFiles([
    'uzumaxy:jstree/32px.png',
    'uzumaxy:jstree/40px.png',
    'uzumaxy:jstree/throbber.gif'
  ], 'client', {isAsset: true});

});
