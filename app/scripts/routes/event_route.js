Opengov.EventRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('event', params.event_id);
  }
});

