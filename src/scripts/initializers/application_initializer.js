Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    container.register('authenticator:custom', Opengov.CustomAuthenticator);
    Ember.SimpleAuth.setup(container, application);
  }
});