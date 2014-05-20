Opengov.EventIndexRoute = Ember.Route.extend(Opengov.ProtectedRouteMixin, {
  renderTemplate: function(){
    this.render('events/details', {
      outlet: "main"
    });
  },
  model: function(params){
    console.log(params);
    return this.modelFor('event')
  }
});