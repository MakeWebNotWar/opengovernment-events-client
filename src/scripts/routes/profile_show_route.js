Opengov.ProfileShowRoute = Ember.Route.extend({
  beforeModel: function(){
    this.transitionTo('profile.index');
  }
});