// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events', function(){});
  this.resource('event', {path: "events/:event_id"});
  this.route('login');
  this.resource('locations');
  this.resource('login');
});

Opengov.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('events');
  }
});

Opengov.EventsRoute = Ember.Route.extend({
  beforeModel: function(){
    Opengov.Map.eventsPushPinsLayer = new Microsoft.Maps.EntityCollection();
  },
  renderTemplate: function(){
    this.render('events/events', {
      outlet: "main"
    });
  },
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventRoute = Ember.Route.extend({
  setupController: function(controller, e){
    controller.set('model', e)
  },
  renderTemplate: function(){
    this.render('events/show');
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

Opengov.LoginRoute = Ember.Route.extend({
  setupController: function(controller, context) {
  }
});

