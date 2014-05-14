Opengov.ProtectedRouteMixin = Ember.Mixin.create({
  beforeModel: function(transition){
    var session;

    session = this.controllerFor('login').get('session');
    
    if(!session.authentication_token){
      session.set('attemptedTransition', transition);  
    }    
  }
});
