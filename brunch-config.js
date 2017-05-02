// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'js/app.js'},
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
  pleeease: {
    sass: true,
    autoprefixer: {
      browsers: ['> 1%'],
    },
  },
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap',
  },
  styles: {
    bootstrap: ['dist/css/bootstrap.css'],
  },
};
