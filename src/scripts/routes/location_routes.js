Opengov.LocationsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('locations/index');
  },
  model: function(){
    return this.store.find('location');
  }
});

Opengov.LocationRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('locations/index');
  },
  model: function(params){
    return this.store.find('location', params.location_id);
  }
});
