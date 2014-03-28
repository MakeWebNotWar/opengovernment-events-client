Opengov.EventsListView = Ember.View.extend({
  outlet: 'list',
  templateName: 'events/list',
  didInsertElement: function(){
    Opengov.Map.eventsPushPinsLayer = new Microsoft.Maps.EntityCollection();
  }
});
    