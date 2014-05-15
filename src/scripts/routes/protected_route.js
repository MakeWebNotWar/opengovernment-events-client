Opengov.ProtectedRoute = Ember.Route.extend({
  beforeModel: function(transition){
    var session;
    session = this.controllerFor('login').get('session');
    session.set('attemptedTransition', transition);  
  }
});