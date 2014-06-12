Opengov.EventIndexRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, {
  renderTemplate: function(){
    this.render('events/details', {
      outlet: "main"
    });
  },
  model: function(){
    return this.modelFor('event')
  }
});