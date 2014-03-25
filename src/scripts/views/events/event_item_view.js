Opengov.EventItemView = Ember.View.extend({
  templateName: 'events/event_item',
  click: function() {
    var self = this;
    var elementId = self.get('elementId');

    $('.item').removeClass('selected');
    self.$().find('.item').addClass('selected');

    Opengov.Map.map.setView({
      center: new Microsoft.Maps.Location(self.location.get('coordinates')[0], self.location.get('coordinates')[1]),
      zoom: 17
    });
    var eventId = self.get('content.id');
  },
  didInsertElement: function(){
    var self = this;
    var index = parseInt(self.get('_parentView.contentIndex'));
    var locationId = self.get('context').get('model').get('content')[index].get('location').get('id');

    Opengov.Location.store.find('location', locationId).then(function(location){
      var coordinates = location.get('coordinates'),
          lat = coordinates[0],
          lng = coordinates[1],
          loc = new Microsoft.Maps.Location(lat, lng),
          text = (index + 1).toString(),
          pin = new Microsoft.Maps.Pushpin(loc, {text: text});
          self.location = location;

          Microsoft.Maps.Events.addHandler(pin, 'click', self.toggleEventInfo);

      Opengov.Map.eventsPushPinsLayer.push(pin);
    });
  },
  location: null,
  toggleEventInfo: function(ev){    
    console.log('clicks happen');
    $('.eventInfo').hide();
    console.log(ev);
  },
  eventInfoBox: {
    visible: false
  }
});
    