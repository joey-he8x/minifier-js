Package.describe({
  name: 'abernix:minifier-js',
  summary: "JavaScript minifier",
  version: "1.3.18"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-js": "git+https://github.com/mishoo/UglifyJS2#harmony-v2.7.5",
});

Npm.strip({
  "uglify-js": ["test/"]
});

Package.onUse(function (api) {
  api.export(['UglifyJSMinify', 'UglifyJS']);
  api.addFiles(['minifier.js'], 'server');
});

Package.onTest(function (api) {
  api.use('abernix:minifier-js', 'server');
  api.use('tinytest');

  api.addFiles([
    'beautify-tests.js',
  ], 'server');
});
