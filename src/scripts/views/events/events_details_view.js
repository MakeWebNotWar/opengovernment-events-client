Opengov.EventsDetailsView = Ember.View.extend({
  templateName: 'events/details',
  didInsertElement: function(){
    console.log('eventsDetails');
    this.$(window).resize();
  }
});