Opengov.EventsListView = Ember.View.extend({
  templateName: 'events/list',
  didInsertElement: function(){
    Opengov.Map.eventsPushPinsLayer = new Microsoft.Maps.EntityCollection();
  }
});
    