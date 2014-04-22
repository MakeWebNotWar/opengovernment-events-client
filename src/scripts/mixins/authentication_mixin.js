Opengov.Authentication = Ember.Mixin.create({
  authentication_token: localStorage.authentication_token, 
  user_id: localStorage.user_id,
  user_email: localStorage.user_email,
  user_firstname: localStorage.user_firstname,
  user_lastname: localStorage.user_lastname,
  user_gravatarID: localStorage.user_gravatarID,
  loggedIn: JSON.parse(localStorage.loggedIn),

  actions:{
    login: function() {
      var self, store, url, data;

      self = this; 
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'authentication'].join('/');
      data = {authentication: this.getProperties('user_email', 'user_password')};
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
              user_gravatarID: response.user_gravatarID,
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