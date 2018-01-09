Package.describe({
  name: 'alexandreyu:stellarsdk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'a meteor package for stellar sdk in js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/iswarm/stellarsdk',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.mainModule('stellarsdk.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alexandreyu:stellarsdk');
  api.mainModule('stellarsdk-tests.js');
});
