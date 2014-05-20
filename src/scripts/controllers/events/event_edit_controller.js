Opengov.EventEditController = Ember.ObjectController.extend({
  actions: {
    reset: function(){
      var self;

      self = this;

      console.log('reset');

      properties = self.get('originalPropertyValues');
      self.setProperties(properties);
      console.log(properties);  
      
      
    }
  }
});