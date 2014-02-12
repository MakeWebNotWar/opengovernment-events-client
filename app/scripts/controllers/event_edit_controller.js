Opengov.EventEditController = Ember.ObjectController.extend({
  needs: 'event',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.event.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('event',this.get('model'));
    }
  }
});

