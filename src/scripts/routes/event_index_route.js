Opengov.EventIndexRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, {
  renderTemplate: function(){
    this.render('events/details', {
      outlet: "main"
    });
  },
  model: function(params){
    return this.modelFor('event')
  }
});