Opengov.SignupIndexController = Ember.Controller.extend({
  reset: function(){
    this.setProperties({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
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
    }
  }
});