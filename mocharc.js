module.exports = {
  extension: ['js'],
  recursive: true,
  require: [
      'source-map-support/register',
  ],
  spec: 'dist/test/**/*.js',
  package: './package.json',
  ui: 'bdd',
};