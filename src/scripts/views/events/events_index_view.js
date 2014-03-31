Opengov.EventsIndexView = Ember.View.extend({
  didInsertElement: function(){
    Opengov.Map.eventsPushPinsLayer = new Microsoft.Maps.EntityCollection();
    this.$(window).resize();
  }
});