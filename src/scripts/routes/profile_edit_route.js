Opengov.ProfileEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params){
    var self, session, store, url;

    self = this;
    session = self.get('session');
    store = self.store.adapterFor('application');
    url = [store.host, store.namespace, 'users', session.get('user_id')].join('/');

    return Ember.$.ajax({
      type: 'GET',
      url: url,
      headers: {
        "X-Authentication-Token": session.get('authentication_token'),
        "X-User-Email": session.get('user_email')
      }
    });
  },
  setupController: function(controller, model){
    controller.set('model', model.user)
  }
});