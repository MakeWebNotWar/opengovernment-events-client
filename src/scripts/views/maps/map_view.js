Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){
    var eventModel = this.get('controller.model.content'),
        userCoordinates = navigator.geolocation.getCurrentPosition(this.getUserLocation),
        map = window.map = new Microsoft.Maps.Map(document.getElementById("map"), {
          credentials:"Avpt8rWAmFwIe9hCE8EP5GyKx3Vgr86LqjoWGZ8KdrvtgazGt1ONCO9tr9AF1VJN",
          mapTypeId: Microsoft.Maps.MapTypeId.road,
          zoom: 13
        });

    this.$(window).resize();
  },
  addPin: function(coordinates, text){
    var pin = new Microsoft.Maps.Pushpin(coordinates, {text: text});
    window.map.entities.push(pin);
  },
  getUserLocation: function(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    window.map.setView({
      center: new Microsoft.Maps.Location(lat, lng) 
    });
  }
});
