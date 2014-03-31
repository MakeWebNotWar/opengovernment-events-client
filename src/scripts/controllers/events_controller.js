Opengov.EventsController = Ember.Controller.extend({
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventsIndexController = Ember.ArrayController.extend({
  itemController: 'event',
  actions: {
    centerToUser: function(){
      Opengov.Map.centerToUser();
    }
  }
});

Opengov.EventController = Ember.ObjectController.extend({
});