Opengov.EventEditRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params){
    return this.modelFor('event');
  }
});