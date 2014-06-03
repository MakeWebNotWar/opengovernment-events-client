Opengov.SignupIndexRoute = Ember.Route.extend({
  beforeModel: function(){
    var self, session;
    self = this;
    session = self.get('session');

    if(session.isAuthenticated){
      self.transitionTo('profile');
    }
  },
  setupController: function(controller, context) {
    controller.reset();
  },
  actions: {
    signup: function(){
      var self, attributes, data, store, url;

      self = this;
      attributes = this.getProperties(
        "firstname", 
        "lastname", 
        "email", 
        "password", 
        "password_confirmation"
      );
      data = {
        signup: attributes
      };
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'signup'].join('/');

      Ember.$.ajax({
        type: "POST",
        data: data,
        url: url
      }).success(function(response){
        self.transitionToRoute('signup.success');
      });
    },
    signupWithTwitter: function(){
      var self, attributes, data, store, url;
      this.get('session').authenticate('authenticator:twitter', {});
    },
    sessionAuthenticationSucceeded: function() {
      var self, session;

      self = this;
      session = self.get('session');
      requires_signup = session.get('requires_signup');
      
      if(requires_signup){
        self.transitionTo('profile.edit', session.get('user_id'));
        session.set('profileMessage', "Please enter your email address and password to complete the signup process.");
      }
    }
  }

});