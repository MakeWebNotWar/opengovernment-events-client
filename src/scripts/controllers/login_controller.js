Opengov.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticatorFactory: 'authenticator:custom',
  reset: function(){
    this.setProperties({
      identification: "",
      password: ""
    });
  }
});