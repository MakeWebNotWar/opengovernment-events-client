Opengov.LocationView = Ember.View.extend({
  didInsertElement: function(){  
    this.$(window).resize();
  }
});