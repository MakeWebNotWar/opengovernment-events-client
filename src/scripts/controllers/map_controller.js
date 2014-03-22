Opengov.MapController = Ember.Controller.extend({
  model: function(){
    return this.store.find('event');
  }
});
