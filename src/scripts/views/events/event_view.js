Opengov.EventView = Ember.View.extend({
  templateName: 'events/event',
  click: function() {
    var self = this;
    var elementId = self.get('elementId');

    $('.item').removeClass('selected');
    self.$().find('.item').addClass('selected');

    Opengov.Map.map.setView({
      center: new Microsoft.Maps.Location(self.location.get('coordinates')[0], self.location.get('coordinates')[1]),
      zoom: 17
    });
  },
  didInsertElement: function(){
    var self = this,
        lat,
        lng,
        index = parseInt(self.get('_parentView.contentIndex'));
    self.get('controller').get('location').then(
      function(loc){
        self.location = loc;
        coordinates = loc.get('coordinates'),
        lat = coordinates[0],
        lng = coordinates[1]
        loc = new Microsoft.Maps.Location(lat, lng),
        text = (index + 1).toString(),
        pin = new Microsoft.Maps.Pushpin(loc, {text: text});

        Opengov.Map.eventsPushPinsLayer.push(pin);
      }
    );
  },
  toggleEventInfo: function(self){

  }
});