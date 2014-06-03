Opengov.SignupIndexController = Ember.Controller.extend({
  reset: function(){
    this.setProperties({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  }
});