Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    container.register('authenticator:custom', Opengov.CustomAuthenticator);
    container.register('authorizer:custom', Opengov.CustomAuthorizer);

    Ember.SimpleAuth.setup(container, application, {
      authorizerFactory: 'authorizer:custom',
      crossOriginWhitelist: ['http://localhost:3000', 'https://api.peopleandcode.com']
    });
  }
});