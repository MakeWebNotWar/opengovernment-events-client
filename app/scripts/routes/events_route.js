Opengov.EventsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('event');
  }
});

