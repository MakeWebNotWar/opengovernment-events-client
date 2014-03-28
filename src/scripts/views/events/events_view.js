Opengov.EventsView = Ember.View.extend({
  didInsertElement: function(){
    Opengov.Map.mapInit();
    navigator.geolocation.getCurrentPosition(this.getUserLocation);
    Opengov.Map.map.entities.push(Opengov.Map.eventsPushPinsLayer);
  },
  getUserLocation: function(position){
    var lat = position.coords.latitude,
        lng = position.coords.longitude,
        loc = new Microsoft.Maps.Location(lat, lng),
        text = "You",
        pin = new Microsoft.Maps.Pushpin(loc, {text: text});

    Opengov.Map.map.entities.push(pin);
    Opengov.Map.map.setView({
      center: new Microsoft.Maps.Location(lat, lng)
    });
  }
});
