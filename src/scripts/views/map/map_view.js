Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){  

    var map = new Microsoft.Maps.Map(document.getElementById("map"), {
      credentials:"Avpt8rWAmFwIe9hCE8EP5GyKx3Vgr86LqjoWGZ8KdrvtgazGt1ONCO9tr9AF1VJN",
      center: new Microsoft.Maps.Location(43.653233,-79.383194),
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 13
    });
    var loc = new Microsoft.Maps.Location(43.653233,-79.483194);
    var pin = new Microsoft.Maps.Pushpin(loc, {text: "99"});

    this.$(window).resize();

    map.entities.push(pin);
    
  }
});