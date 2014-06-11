Opengov.EventLocationRoute = Ember.Route.extend({
  model: function(){
    this.modelFor('event');
  }
});