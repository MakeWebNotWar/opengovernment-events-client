Opengov.ProtectedRouteMixin = Ember.Mixin.create({
  beforeModel: function(transition){
    var session;
    session = this.controllerFor('login').get('session');
    session.set('attemptedTransition', transition);  
  }
});