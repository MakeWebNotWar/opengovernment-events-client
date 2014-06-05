Opengov.MapMixin = Ember.Mixin.create({
  mapInit: function(){
    var self;
    
    self = this;

    self.getUserLocation().then(
      function(coordinates){
        var center, styles, mapOptions, map;

        center = new google.maps.LatLng(coordinates.latitude, coordinates.longitude);
        
        styles = [
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              { visibility: "off" }
            ]   
          }
        ];

        mapOptions = {
          zoom: 12,
          center: center,
          styles: styles
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        self.set('map', map);

      }
    );
  },

  // pushPinLayer: new Microsoft.Maps.EntityCollection(),

  locations: [],

  getUserLocation: function(callback){
    return $.getJSON("http://freegeoip.net/json/").then(
      function(response){
        return response;
      }
    );
  },
  actions: {
    setBoundingBox: function(){
      var self, location, locations, boundingBox, map, collection;
      
      self = this;
      locations = self.locations;
      map = self.map;
  
      boundingBox = Microsoft.Maps.LocationRect.fromLocations(locations);

      map.setView({
        bounds: boundingBox,
        animate:false
      });
      self.set('map', map);
    },
    
    centerToUser: function(){
      var self;
      self = this;
      navigator.geolocation.getCurrentPosition(
        self.getUserGeoLocation,
        self.getUserIpLocation
      );
    },

    getUserIpLocation: function(position){
      var self;
      self = this;

      $.getJSON("http://freegeoip.net/json/").then(function(coordinates){

        self.makeUserPushPin(coordinates);
        // self.setUserGeoLocation(coordinates);
      });
    },
    getUserGeoLocation: function(position){
      var self, coordinates;
      
      self = this;
      coordinates = position.coords;

      self.makeUserPushPin(coordinates);
      // self.setUserGeoLocation(coordinates);
    },
    setUserGeoLocation: function(coordinates){
      var self, lat, lng, coordinates;
      
      self = this;    
      lat = coordinates.latitude;
      lng = coordinates.longitude;
      coordinates = JSON.stringify({latitude: lat, longitude: lng});

      localStorage.coordinates = coordinates;
    },
    makeUserPushPin: function(coordinates){
      var self, lat, lng, loc, text, pin;

      self = this;
      lat = coordinates.latitude;
      lng = coordinates.longitude;
      loc = new Microsoft.Maps.Location(lat, lng);
      text = "You";
      pin = new Microsoft.Maps.Pushpin(loc, {text: text});

      self.map.entities.push(pin);
      this.centerMapToCoordinates(coordinates);
    },
    centerMapToCoordinates: function(coordinates){
      var self, lat, lng;

      self = this;
      lat = coordinates.latitude;
      lng = coordinates.longitude;

      self.map.setView({
        center: new Microsoft.Maps.Location(lat, lng),
        zoom: 10
      });
    },
  }

});