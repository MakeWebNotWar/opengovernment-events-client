Opengov.EventsListItemView = Ember.View.extend({
  templateName: 'events/event_item',
  clickCount: 0,
  click: function() {
    var self, elementId, itemController, indexController, map;
    
    self = this;
    elementId = self.get('elementId');
    itemController = self.get('controller.content');
    indexController = self.get('controller.parentController');
    pin = itemController.get('pin');
    currentSelectedItem = indexController.get('currentSelectedItem');
    selected = currentSelectedItem === itemController.id ? true : false;
    map = indexController.get('map');

    $('.item').removeClass('selected');
    self.$().find('.item').addClass('selected');

    if(self.clickCount > 0 && selected){
      self.get('controller').transitionToRoute('event', itemController.id);
    } else {
      self.clickCount++;
      indexController.set('currentSelectedItem', itemController.id);
      map.setCenter(pin.getPosition());
      map.setZoom(14);
    }
    
  },
  location: null,
  toggleEventInfo: function(self){

  }
});
    