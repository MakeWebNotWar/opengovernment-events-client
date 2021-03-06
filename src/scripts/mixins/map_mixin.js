Opengov.MapMixin = Ember.Mixin.create({
  mapInit: function(){
    var self;
    
    self = this;

    function buildMap(coordinates){
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
      bounds = new google.maps.LatLngBounds();

      self.set('mapBounds', bounds);
      self.set('map', map);

      return map;
        
    }

    return new Ember.RSVP.Promise(function(resolve, reject){
      self.getUserLocation().then(
        function(coordinates){
          map = buildMap(coordinates);
          resolve(map);
        },
        function(coordinates){
          map = buildMap(coordinates);
          resolve(map);
        }
      );
    });
  },

  locations: [],

  addPins: function(){
    var self, map, pins, content, length, bounds;
    
    self = this;
    map = self.get('map');
    pins = [];
    content = self.get('content');
    length = content.get('content.length');
    bounds = self.get('mapBounds');

    return new Promise(function(resolve, reject){
      content.sortBy('start_date').forEach(function(e, index){
        e.get('location').then(function(location){
          pin = self.addPin(location);
          pin.setMap(map);

          google.maps.event.addListener(pin, 'click', function() { 
            self.transitionToRoute('event', e.get('id'));
          });

          e.set('pin', pin);
          bounds.extend(pin.getPosition());
          pins.push(pin);
          length--;
          if(length === 0){
            resolve(pins);
          }
        });
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

    window.ray = self;

    return pin;
  },
  setBoundingBox: function(){
    var self, map, bounds;
    
    self = this;
    content = self.get('content');
    map = self.get('map');
    bounds = self.get('mapBounds');

    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  },

  getUserLocation: function(callback){
    return $.getJSON("http://freegeoip.net/json/").then(
      function(response){
        return response;
      },
      function(){
        coordinates = {
          latitude: 43.7000,
          longitude: -79.4000
        };
        return coordinates;
      }
    );
  },
  actions: {
    setBoundingBox: function(){
      this.setBoundingBox();
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