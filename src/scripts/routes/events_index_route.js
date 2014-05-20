Opengov.EventsIndexRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('event');
  }
});