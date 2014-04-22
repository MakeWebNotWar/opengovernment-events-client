Opengov.EventsDetailsView = Ember.View.extend({
  templateName: 'events/details',
  didInsertElement: function(){

    window.ray = this;
    this.$(window).resize();
  }
});