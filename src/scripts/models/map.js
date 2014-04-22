window.Opengov.Map = {
  mapInit: function(){
    var center = new Microsoft.Maps.Location(43.7000, -79.4000);

    this.map = window.Opengov.Map.map = new Microsoft.Maps.Map(document.getElementById("map"), {
      credentials:"AtXaY5ngrjFXFtDzCQ634BPmhEpiqkz-jm1mox73DLiRD9IW1jUq7iO4iKvCGfvF",
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 3,
      center: center,
      showLogo: false,
      showMapTypeSelector: false,
      showScalebar: false,
    });

    return this.map;
  },
  centerToUser: function(){
    navigator.geolocation.getCurrentPosition(
      Opengov.Map.getUserGeoLocation,
      Opengov.Map.getUserIpLocation
    );
  },
  eventsPushPinsLayer: new Microsoft.Maps.EntityCollection(),
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
    var self = this,
        // collection = self.eventsPushPinsLayer,
        locations = [],
        boundingBox;

    if(collection){
      for(var i = 0, len = collection.getLength(); i < len; ++i){
        var location = collection.get(i).getLocation();
        
        locations.push(location);
      }
      var boundingBox = Microsoft.Maps.LocationRect.fromLocations(locations);
      Opengov.Map.map.setView({
        bounds: boundingBox,
        animate:false
      });
    }
  }
}