Opengov.EventItemView = Ember.View.extend({
  templateName: 'events/event_item',
  click: function(e) {
    var self = this;
    var elementId = this.get('elementId');
    $('.item').removeClass('selected');
    this.$().find('.item').addClass('selected');

    window.map.setView({
      center: new Microsoft.Maps.Location(self.location.get('coordinates')[0], self.location.get('coordinates')[1]),
      zoom: 17
    });
  },
  didInsertElement: function(){
    var self = this;
    var index = parseInt(this.get('_parentView.contentIndex'));
    console.log(index);
    var locationId = this.get('context').get('model').get('content')[index].get('location').get('id');
    Opengov.Location.store.find('location', locationId).then(function(location){
      self.location = location;
      var coordinates = location.get('coordinates');
      var lng = coordinates[1];
      var lat = coordinates[0];
      var loc = new Microsoft.Maps.Location(lat, lng);
      var text = (index + 1).toString();
      var pin = new Microsoft.Maps.Pushpin(loc);
      window.map.entities.push(pin);
    });
  },
  location: null
});
    