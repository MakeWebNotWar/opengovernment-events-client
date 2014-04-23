Opengov.AuthenticationController = Ember.ObjectController.extend({
  authentication_token: localStorage.authentication_token, 
  user_id: localStorage.user_id,
  user_email: localStorage.user_email,
  user_firstname: localStorage.user_firstname,
  user_lastname: localStorage.user_lastname,
  user_password: "",
  user_gravatarID: localStorage.user_gravatarID,
  loggedIn: JSON.parse(localStorage.loggedIn),
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
  }.observes('loggedIn')
});