Opengov.AuthenticationMixin = Ember.Mixin.create({
  // authentication_token: function(){
  //   return this.get('controllers.authentication').authentication_token;
  // }.property('controllers.authentication.authentication_token'),
  // user_id: function(){
  //   return this.get('controllers.authentication').user_id;
  // }.property('controllers.authentication.user_id'),
  // user_email: function(){
  //   return this.get('controllers.authentication').user_email;
  // }.property('controllers.authentication.user_email'),
  // user_firstname: function(){
  //   return this.get('controllers.authentication').user_firstname;
  // }.property('controllers.authentication.user_firstname'),
  // user_lastname: function(){
  //   return this.get('controllers.authentication').user_lastname;
  // }.property('controllers.authentication.user_lastname'),
  // user_gravatarID: function(){
  //   return this.get('controllers.authentication').user_gravatarID;
  // }.property('controllers.authentication.user_gravatarID'),
  // loggedIn: function(){
  //   return this.get('controllers.authentication').loggedIn;
  // }.property('controllers.authentication.loggedIn'),
  authentication_token: localStorage.authentication_token, 
  user_id: localStorage.user_id,
  user_email: localStorage.user_email,
  user_firstname: localStorage.user_firstname,
  user_lastname: localStorage.user_lastname,
  user_gravatarID: localStorage.user_gravatarID,
  loggedIn: JSON.parse(localStorage.loggedIn),
  user_password: "",
  errorMessage: "",


  // property changes 
  authenticationTokenChanged: function(){
    localStorage.authentication_token = this.get('authentication_token');
  }.observes('authentication_token'),
  userIdChanged: function(){
    localStorage.user_id = this.get('user_id');
  }.observes('user_id'),  
  userEmailChanged: function(){
    localStorage.user_email = this.get('user_email');
  }.observes('user_email'), 
  userFirstNameChanged: function(){
    localStorage.user_firstname = this.get('user_firstname');
  }.observes('user_firstname'), 
  userLastNameChanged: function(){
    localStorage.user_lastname = this.get('user_lastname');
  }.observes('user_lastname'),
  userGravatarIDChanged: function(){
    localStorage.user_gravatarID = this.get('user_gravatarID');
  }.observes('user_gravatarID'),
  loggedInChanged: function(){
    localStorage.loggedIn = this.get('loggedIn');
  }.observes('loggedIn'),
  // authenticationTokenChanged: function(){
  //   this.get('controllers.authentication').set('authentication_token', this.authentication_token);
  // }.observes('authentication_token'),
  // userIdChanged: function(){
  //   this.get('controllers.authentication').set('user_id', this.user_id);
  // }.observes('user_id'),  
  // userEmailChanged: function(){
  //   this.get('controllers.authentication').set('user_email', this.user_email);
  // }.observes('user_email'), 
  // userFirstNameChanged: function(){
  //   this.get('controllers.authentication').set('user_firstname', this.user_firstname);
  // }.observes('user_firstname'), 
  // userLastNameChanged: function(){
  //   this.get('controllers.authentication').set('user_lastname', this.user_lastname);
  // }.observes('user_lastname'),
  // userGravatarIDChanged: function(){
  //   this.get('controllers.authentication').set('user_gravatarID', this.user_gravatarID);
  // }.observes('user_gravatarID'),
  // loggedInChanged: function(){
  //   this.get('controllers.authentication').set('loggedIn', this.loggedIn);
  // }.observes('loggedIn'),

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
              loggedIn: "true",
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
      console.log(this.getProperties('user_email', 'authentication_token'));

      this.setProperties({
        authentication_token: "",
        user_id: "",
        user_email: "",
        user_password: "",
        loggedIn: "false",
        errorMessage: ""
      });

      console.log(this.getProperties('user_email', 'authentication_token'));
      console.log(this.authentication_token);
    },
  }
});