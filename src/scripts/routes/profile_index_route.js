Opengov.ProfileIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params){
    var self, session;
    self = this;
    session = self.get('session');
    if(session.isAuthenticated){
      return self.store.find('user', session.get('user_id'));
    }
    else {
      session.set('attemptedTransition', this)
      self.transitionTo('login');
    }
  }
});