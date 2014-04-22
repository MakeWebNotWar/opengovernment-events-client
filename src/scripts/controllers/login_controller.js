Opengov.LoginController = Ember.Controller.extend({
  needs: ['application'],
  
  loggedIn: Ember.computed.alias('controllers.application.loggedIn'),
  
  user_email: Ember.computed.alias('controllers.application.user_email'),
  
  user_firstname: Ember.computed.alias('controllers.application.user_firstname'),

  user_lastname: Ember.computed.alias('controllers.application.user_lastname'),

  user_gravatarID: Ember.computed.alias('controllers.application.user_gravatarID'),

  user_password: Ember.computed.alias('controllers.application.user_password'),
  
  errorMessage: Ember.computed.alias('controllers.application.errorMessage'),

  actions: {
    login: function(){
      this.get('controllers.application').send('login');
    },
    logout: function(){
      this.get('controllers.application').send('logout');
    }
  }
});