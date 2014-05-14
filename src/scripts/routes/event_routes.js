Opengov.EventsIndexRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('event');
  }
});

Opengov.EventRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, {
  renderTemplate: function(){
    this.render('events/details', {
      outlet: "main"
    });
  },
  model: function(params){
    return this.store.find('event', params.event_id)
  }
});