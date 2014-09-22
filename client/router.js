Router.configure({
  layoutTemplate: 'core_layout',
  notFoundTemplate: 'core_notFound',
  loadingTemplate: 'core_loading'
});

Router.map(function() {
  this.route('index', {path: '/'});
});