Opengov.EventsListItemView = Ember.View.extend({
  templateName: 'events/event_item',
  clickCount: 0,
  click: function() {
    var self, elementId, itemController, indexController, map;
    
    self = this;
    elementId = self.get('elementId');
    itemController = self.get('controller.content');
    indexController = self.get('controller.parentController');
    currentSelectedItem = indexController.get('currentSelectedItem');
    selected = currentSelectedItem === itemController.id ? true : false;
    map = indexController.map;


    $('.item').removeClass('selected');
    self.$().find('.item').addClass('selected');

    if(self.clickCount > 0 && selected){
      self.get('controller').transitionToRoute('event', itemController.id);
    } else {
      self.clickCount++;
      indexController.set('currentSelectedItem', itemController.id);
      map.setView({
        center: itemController.pin.getLocation(),
        zoom: 13
      });
    }
    
  },
  didInsertElement: function(){
    var self = this;
    // var index = parseInt(self.get('_parentView.contentIndex'));
    // var locationId = self.get('context').get('model').get('content')[index].get('location').get('id');
    // console.log(this.get('controller.id'));
    // Opengov.Location.store.find('location', locationId).then(function(location){
    //   var coordinates = location.get('coordinates'),
    //       lat = coordinates[0],
    //       lng = coordinates[1],
    //       loc = new Microsoft.Maps.Location(lat, lng),
    //       text = (index + 1).toString(),
    //       pin = new Microsoft.Maps.Pushpin(loc, {text: text});
    //       self.location = location;

    //       Microsoft.Maps.Events.addHandler(pin, 'click', self.toggleEventInfo(self));

    //   Opengov.Map.eventsPushPinsLayer.push(pin);
    // });
  },
  location: null,
  toggleEventInfo: function(self){

  }
});
    