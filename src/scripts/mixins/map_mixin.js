Opengov.MapMixin = Ember.Mixin.create({
  mapInit: function(){
    var self, center, map;

    self = this;

    center = new Microsoft.Maps.Location(43.7000, -79.4000);
    
    map = new Microsoft.Maps.Map(document.getElementById("map"), {
      credentials:"AtXaY5ngrjFXFtDzCQ634BPmhEpiqkz-jm1mox73DLiRD9IW1jUq7iO4iKvCGfvF",
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 5,
      center: center,
      showLogo: false,
      showMapTypeSelector: false,
      showScalebar: false,
    });

    this.set('map', map);
  },

  // pushPinLayer: new Microsoft.Maps.EntityCollection(),

  locations: [],

  addPushPins: function(){
    var self, map, pin;

    self = this;
    map = self.map;

    self.get('content').forEach(function(ev, index){
      ev.get('location').then(function(location){
        if(location){
          coordinates = location.get('coordinates');
          lat = coordinates[0],
          lng = coordinates[1],
          loc = new Microsoft.Maps.Location(lat, lng),
          text = (index + 1).toString(),
          pin = new Microsoft.Maps.Pushpin(loc, {text: text});
          // self.pushPinLayer.push(pin);
          map.entities.push(pin);
          self.locations.push(loc);

          Microsoft.Maps.Events.addHandler(pin, 'click', function(){
           self.transitionToRoute('event', ev.id);
          });
          ev.set('pin', pin);
        }
        
      });
    });
    // map.entities.push(self.pushPinLayer);
    // return self.pushPinLayer;
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