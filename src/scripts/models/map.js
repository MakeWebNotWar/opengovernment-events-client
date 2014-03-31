Opengov.Map = {
  mapInit: function(){
    Opengov.Map.map = new Microsoft.Maps.Map(document.getElementById("map"), {
      credentials:"Avpt8rWAmFwIe9hCE8EP5GyKx3Vgr86LqjoWGZ8KdrvtgazGt1ONCO9tr9AF1VJN",
      mapTypeId: Microsoft.Maps.MapTypeId.road
    });
  },
  centerToUser: function(){
    var coordinates = $.parseJSON(localStorage.coordinates);

    if(coordinates && !$.isEmptyObject(coordinates)){
      this.makeUserPushPin(coordinates);
    } else {
      navigator.geolocation.getCurrentPosition(
        Opengov.Map.getUserGeoLocation,
        Opengov.Map.getUserIpLocation
      );
    }
  },
  getUserIpLocation: function(position){
    $.getJSON("http://freegeoip.net/json/").then(function(coordinates){

      Opengov.Map.makeUserPushPin(coordinates);
      // Opengov.Map.setUserGeoLocation(coordinates);
    });
  },
  getUserGeoLocation: function(position){
    var coordinates = position.coords;

    Opengov.Map.makeUserPushPin(coordinates);
    // Opengov.Map.setUserGeoLocation(coordinates);
  },
  setUserGeoLocation: function(coordinates){
    var lat = coordinates.latitude,
        lng = coordinates.longitude,
        coordinates = JSON.stringify({latitude: lat, longitude: lng});

    localStorage.coordinates = coordinates;
  },
  makeUserPushPin: function(coordinates){
    var lat = coordinates.latitude,
        lng = coordinates.longitude;
        loc = new Microsoft.Maps.Location(lat, lng),
        text = "You",
        pin = new Microsoft.Maps.Pushpin(loc, {text: text});

    Opengov.Map.map.entities.push(pin);
    this.centerMapToUser(coordinates);
  },
  centerMapToUser: function(coordinates){
    var lat = coordinates.latitude,
        lng = coordinates.longitude;
    Opengov.Map.map.setView({
      center: new Microsoft.Maps.Location(lat, lng),
      zoom: 10
    });
  },
  setBoundingBox: function(collection){
    var locations = [];

    if(collection){
      for(var i = 0, len = collection.getLength(); i < len; ++i){
        console.log(i);
        var location = collection.get(i).getLocation();
        
        locations.push(location);
      }
      var boundingBox = Microsoft.Maps.LocationRect.fromLocations(locations);

      Opengov.Map.map.setView({bounds: boundingBox});
    }
  }
}