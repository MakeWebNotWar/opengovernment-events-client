Opengov.EventEditController = Ember.ObjectController.extend({
  actions: {
    updateEvent: function(){
      this.get('model').save();
    },
    reset: function(){
      var self;
      self = this;
      properties = self.get('originalPropertyValues');
      self.setProperties(properties);
      self.get('location').setProperties(properties.location);
      console.log(properties);
      this.transitionToRoute('event', this.get('id'));
    }
  }
});