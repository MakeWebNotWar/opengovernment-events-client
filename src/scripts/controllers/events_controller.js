Opengov.EventsController = Ember.ArrayController.extend({
  itemController: 'event',
  actions: {
    centerToUser: function(){
      Opengov.Map.centerToUser();
    }
  }
});

Opengov.EventController = Ember.ObjectController.extend({});