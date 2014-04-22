Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){
    var map = Opengov.Map.mapInit();
    map.entities.push(Opengov.Map.eventsPushPinsLayer);
    $(window).resize();
  }
});
