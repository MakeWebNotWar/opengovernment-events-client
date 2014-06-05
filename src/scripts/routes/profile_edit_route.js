Opengov.ProfileEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params){
    var self, session;

    self = this;
    session = self.get('session');
    return this.store.find('user', session.get('user_id'));

    // store = self.store.adapterFor('application');
    // url = [store.host, store.namespace, 'users', session.get('user_id')].join('/');

    // return Ember.$.ajax({
    //   type: 'GET',
    //   url: url,
    //   headers: {
    //     "X-Authentication-Token": session.get('authentication_token'),
    //     "X-User-Email": session.get('user_email')
    //   }
    // });
  }
});