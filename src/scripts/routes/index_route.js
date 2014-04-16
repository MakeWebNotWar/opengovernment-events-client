Opengov.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('events');
  }
});