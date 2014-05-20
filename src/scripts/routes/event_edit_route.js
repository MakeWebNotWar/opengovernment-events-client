Opengov.EventEditRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, {
  model: function(params){
    return this.modelFor('event');
  }
});