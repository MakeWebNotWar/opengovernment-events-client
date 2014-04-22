Opengov.EventView = Ember.View.extend({
  templateName: 'events/event',
  click: function() {
    var self = this,
        location = self.location;

    $('.item').removeClass('selected');
    self.$().find('.item').addClass('selected');

    Opengov.Map.map.setView({
      center: new Microsoft.Maps.Location(self.location.get('coordinates')[0], self.location.get('coordinates')[1]),
      zoom: 17
    });
  },
  didInsertElement: function(){
    var self = this,
        eventId = self.get('controller.id'),
        index = parseInt(self.get('_parentView.contentIndex'));

    self.get('controller.location').then(function(loc){
      if(loc){
        self.location = loc;
        coordinates = loc.get('coordinates'),
        lat = coordinates[0],
        lng = coordinates[1],
        loc = new Microsoft.Maps.Location(lat, lng),
        text = (index + 1).toString(),
        pin = new Microsoft.Maps.Pushpin(loc, {text: text});

        Opengov.Map.eventsPushPinsLayer.push(pin);

        Microsoft.Maps.Events.addHandler(pin, 'click', function(ev){
          self.toggleEventInfo(ev)
        });
      }
    });
  },
  toggleEventInfo: function(ev){
    var coordinates = ev.target._location,
        lat = coordinates.latitude,
        lng = coordinates.longitude;

    this.get('controller').transitionToRoute('event', this.get('controller.id'));
  }
});