Opengov.ProfileRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    session = this.get('session');
    return this.store.find('user', session.get('user_id'));
  }
});