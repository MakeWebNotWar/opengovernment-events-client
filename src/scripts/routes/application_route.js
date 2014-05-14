Opengov.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin,{
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('login').set('errorMessage', error.message);
      console.log(this.controllerFor('login'))
    }
  }
});
