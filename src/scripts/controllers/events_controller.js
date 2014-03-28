Opengov.EventsController = Ember.Controller.extend({
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventsIndexController = Ember.ArrayController.extend({
  itemController: 'event'
});

Opengov.EventController = Ember.ObjectController.extend({
  sound: 1
});