// suggest remove

Opengov.EventsIndexView = Ember.View.extend({
  elementId: "events-index-view",
  didInsertElement: function(){
    this.scheduleBoundingBox();
  },
  scheduleBoundingBox : function(){
      Ember.run.scheduleOnce( 'afterRender', this, function(){
        this.childViewsDidRender();
      });
  },
  childViewsDidRender : function(){
    var self = this;
    setTimeout(function(){
      self.get('controller').send('boundToEvents');
    }, 1000);
  }
});