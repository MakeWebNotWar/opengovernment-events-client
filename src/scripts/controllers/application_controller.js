Opengov.ApplicationController = Ember.Controller.extend({
  authentication_token: localStorage.authentication_token, 
  user_id: localStorage.user_id,
  user_email: localStorage.user_email,
  user_firstname: localStorage.user_firstname,
  user_lastname: localStorage.user_lastname,
  loggedIn: JSON.parse(localStorage.loggedIn),
  
  // property changes 
  authenticationTokenChanged: function(){
    localStorage.authentication_token = this.get('authentication_token');
  }.observes('authentication_token'),
  userIdChanged: function(){
    localStorage.user_id = this.get('id');
  }.observes('id'),  
  userEmailChanged: function(){
    localStorage.user_email = this.get('user_email');
  }.observes('user_email'), 
  userFirstNameChanged: function(){
    localStorage.user_firstname = this.get('user_firstname');
  }.observes('user_firstname'), 
  userLastNameChanged: function(){
    localStorage.user_lastname = this.get('user_lastname');
  }.observes('user_lastname'),
  loggedInChanged: function(){
    localStorage.loggedIn = this.get('loggedIn');
  }.observes('loggedIn'),

  actions:{
    login: function() {
      var self = this, 
          store = self.store.adapterFor('application'),
          url = [store.host, store.namespace, 'authentication'].join('/'),
          data = {authentication: this.getProperties('user_email', 'user_password')};

      // Clear out any error messages.
      this.set('errorMessage', null);

      Ember.$.post(url, data).then(
        function(response) {

          if (response.success) {
            // Save the token and transition to where originally intended.
            self.setProperties({
              authentication_token: response.authentication_token,
              user_id: response.user_id,
              user_email: response.user_email,
              user_firstname: response.user_firstname,
              user_lastname: response.user_lastname,
              user_password: "",
              loggedIn: true,
              errorMessage: ""
            });
            console.log(response.message);
          }
          else {
            console.log(response.message);
            self.set('errorMessage', response.message);
          }
        },
        function(response){
          self.set('errorMessage', response.responseJSON.message)
        }
      );
    },
    logout: function() {
      this.send('resetLogin');
    },
    resetLogin: function() {
      this.setProperties({
        authentication_token: "",
        user_id: "",
        user_email: "",
        user_password: "",
        loggedIn: false,
        errorMessage: ""
      });
    },
  }
});