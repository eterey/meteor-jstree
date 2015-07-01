Package.describe({
  name: 'uzumaxy:jstree',
  summary: 'jQuery tree plugin for MeteorJS.',
  version: '3.1.1',
  git: 'https://github.com/uzumaxy/meteor-jstree'
});

Package.onUse(function(api) {

  api.use([
    'jquery@1.0.1'
  ], 'client');

  api.addFiles([
    'jstree/jstree.js',
    'jstree/style.css'
  ], 'client');

  api.addFiles([
    'jstree/32px.png',
    'jstree/40px.png',
    'jstree/throbber.gif'
  ], 'client', {isAsset: true});

});
