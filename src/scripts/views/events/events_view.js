// suggest remove

// Opengov.EventsView = Ember.View.extend({
//   didInsertElement: function(){
//     Opengov.Map.mapInit();
//     navigator.geolocation.getCurrentPosition(this.getUserLocation);
//     Opengov.Map.map.entities.push(Opengov.Map.eventsPushPinsLayer);
//   },
//   getUserLocation: function(position){
//     var self = this;
//         lat = position.coords.latitude,
//         lng = position.coords.longitude,
//         loc = new Microsoft.Maps.Location(lat, lng),
//         text = "You",
//         pin = new Microsoft.Maps.Pushpin(loc, {text: text});

//     Opengov.Map.map.entities.push(pin);
//     Opengov.Map.map.setView({
//       center: new Microsoft.Maps.Location(lat, lng)
//     });
//   },
//   setBoundingBox: function(){
//     var locations = [];
//     console.log(Opengov.Map.eventsPushPinsLayer);

//     if(Opengov.eventsPushPinsLayer.getLength() > 0){
//       for(var i = 0, len = Opengov.Map.eventsPushPinsLayer.getLength(); i < len; i++){
//         console.log(i);
//         var location = Opengov.Map.eventsPushPinsLayer.get(i).getLocation();
        
//         locations.push(location);
//       }
//       var boundingBox = Microsoft.Maps.LocationRect.fromLocations(locations);

//       Opengov.Map.map.setView({bounds: boundingBox});
//     } else {
//       console.log(Opengov.eventsPushPinsLayer.getLength());
//     }
//   }
// });
