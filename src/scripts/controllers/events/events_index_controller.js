Opengov.EventsIndexController = Ember.ArrayController.extend(Opengov.MapMixin, {
  itemController: 'eventsListItem',
  sortProperties: ['start_date'],
  sortAscending: true,
  addPins: function(){
    var self;

    self = this;

    self.get('content').sortBy('start_date').forEach(function(ev, index){
      ev.get('location').then(function(location){
        if(location){
          self.addPin(location);
          // coordinates = location.get('coordinates');
          // lat = coordinates[0],
          // lng = coordinates[1],
          // loc = new Microsoft.Maps.Location(lat, lng),
          // text = (index + 1).toString(),
          // pin = new Microsoft.Maps.Pushpin(loc, {text: text});
          // // self.pushPinLayer.push(pin);
          // map.entities.push(pin);
          // self.locations.push(loc);

          // Microsoft.Maps.Events.addHandler(pin, 'click', function(){
          //  self.transitionToRoute('event', ev.id);
          // });
          // ev.set('pin', pin);
        }
        
      });
    });
    // map.entities.push(self.pushPinLayer);
    // return self.pushPinLayer;
  },
  addPin: function(location){ 
    var self, map, coordinates, latLng, marker;
    
    self = this;
    map = self.get('map');
    coordinates = location.get('coordinates');
    latLng = new google.maps.LatLng(coordinates[0], coordinates[1]);

    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'click', function() { 
      self.get('controller').transitionToRoute('event', self.get('id'));
    }); 
  },
});