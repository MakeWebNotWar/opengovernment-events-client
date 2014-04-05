Opengov.EventsController = Ember.ArrayController.extend({
  itemController: 'event',
  actions: {
    centerToUser: function(){
      Opengov.Map.centerToUser();
    },
    boundToEvents: function(){
      console.log('hello');
      a = Opengov.Map.setBoundingBox(Opengov.Map.eventsPushPinsLayer);
    }
  },

});

Opengov.EventController = Ember.ObjectController.extend({
  needs: ['comment', 'user'],
  itemController: 'event.details'
});

Opengov.EventDetailsController = Ember.ObjectController.extend({

});