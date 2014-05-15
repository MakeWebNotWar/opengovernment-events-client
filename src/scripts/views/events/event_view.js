Opengov.EventView = Ember.View.extend({
  templateName: 'events/event',
  didInsertElement: function(){
    
  },
  toggleEventInfo: function(ev){
    var coordinates = ev.target._location,
        lat = coordinates.latitude,
        lng = coordinates.longitude;

    this.get('controller').transitionToRoute('event', this.get('controller.id'));
  }
});