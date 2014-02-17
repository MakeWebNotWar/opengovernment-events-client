// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events');
  this.resource('event', { path: "/events/:event_id"});
  this.resource('locations', { path: "/locations/:locaiton_id"});
  this.resource('datasets');
});

Opengov.IndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.transitionTo('events');
  }
});

Opengov.EventsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/index');
  },
  model: function(params){
    return this.store.find('event');
  }
});

Opengov.EventRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('event', params.event_id);
  }
});

Opengov.DatasetsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('dataset');
  }
});

Opengov.DatasetRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('dataset', params.dataset_id);
  }
});

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