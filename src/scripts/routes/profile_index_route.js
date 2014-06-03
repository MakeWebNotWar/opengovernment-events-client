Opengov.ProfileIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params){
    var self, session;
    self = this;
    session = self.get('session');
    return this.store.find('user', session.get('user_id'));
  }
});