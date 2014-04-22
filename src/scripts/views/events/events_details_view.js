Opengov.EventsDetailsView = Ember.View.extend({
  templateName: 'events/details',
  didInsertElement: function(){
    this.$(window).resize();
  }
});