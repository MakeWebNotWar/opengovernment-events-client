// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events');
  this.resource('datasets');
});

Opengov.IndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.transitionTo('events');
  }
});

Opengov.EventsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/index');
  },
  model: function(){
    return this.store.find('event');
  }
});