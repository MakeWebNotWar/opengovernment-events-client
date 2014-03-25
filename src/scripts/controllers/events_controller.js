Opengov.EventsController = Ember.Controller.extend({
  model: function(){
    return this.store.find('event');
  }
});

// Opengov.EventController = Ember.Controller.extend({
//   model: function(params){
//     return Opengov.Events.findBy(params.event_id);
//   }
// });