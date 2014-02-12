Opengov.LoginController = Ember.Controller.extend({
 actions: {
  login: function(){
    this.transitionToRoute('users');
  } 
 }
});