Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    container.register('authenticator:custom', Opengov.CustomAuthenticator);
    Ember.SimpleAuth.setup(container, application);
    
    Opengov.Session = Ember.Object.extend({
      init: function(){
        this._super();
        var session = container.lookup('controller:login').get('session');
        this.set('authToken', session.get('authentication_token'));
      }
    }).create();
  }
});