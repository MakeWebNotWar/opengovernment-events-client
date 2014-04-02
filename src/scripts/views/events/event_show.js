Opengov.EventsShowView = Ember.View.extend({
  didInsertElement: function(){
    console.log(this.get('controller.id'));
  }
});