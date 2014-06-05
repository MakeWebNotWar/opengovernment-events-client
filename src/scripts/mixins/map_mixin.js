Opengov.MapMixin = Ember.Mixin.create({
  mapInit: function(){
    var self;
    
    self = this;

    return new Promise(function(resolve, reject){
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
          window.Map = map;

          resolve(map);
        },
        function(){
          reject();
        }
      );
    });
  },

  locations: [],

  addPins: function(){
    var self, map;
    
    self = this;
    map = self.get('map');
    
    self.get('content').sortBy('start_date').forEach(function(e, index){
      e.get('location').then(function(location){
        if(location){
          pin = self.addPin(location);
          pin.setMap(map);
          e.set('pin', pin);
        }
      });
    });    
  },
  addPin: function(location){ 
    var self, coordinates, latLng, pin;

    self = this;
    coordinates = location.get('coordinates');
    latLng = new google.maps.LatLng(coordinates[0], coordinates[1]);

    pin = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(pin, 'click', function() { 
      self.get('controller').transitionToRoute('event', self.get('id'));
    }); 

    return pin;
  },

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
    }
  }

});