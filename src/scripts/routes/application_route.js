Opengov.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin,{
  beforeModel: function(transition){
    var session;
    session = this.controllerFor('login').get('session');
    session.set('attemptedTransition', transition);  
  },
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('login').set('errorMessage', error.message);
    },
    sessionInvalidationSucceeded: function(){
      session = this.controllerFor('login').get('session');
      this.transitionTo(session.attemptedTransition);
    }
  }
});
