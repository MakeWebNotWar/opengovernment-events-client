Opengov.LoginRoute = Ember.Route.extend({
  beforeModel: function(){
    var session;

    session = this.get('session');

    if(session.isAuthenticated){
      this.transitionTo('profile');
    }
  },
  setupController: function(controller, model){
    controller.reset();
  }
});