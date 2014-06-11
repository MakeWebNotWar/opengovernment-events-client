Opengov.EventsNewRoute = Ember.Route.extend({
  beforeModel: function(transition){
    var self, session;

    session = this.get('session');
    session.set('attemptedTransition', transition);
    if(!session.isAuthenticated){
      this.transitionTo('login');
    }
  }
});