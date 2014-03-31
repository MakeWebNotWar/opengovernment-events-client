Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){
    var self = this;

    Opengov.Map.mapInit();
    Opengov.Map.map.entities.push(Opengov.Map.eventsPushPinsLayer);
  }
});
