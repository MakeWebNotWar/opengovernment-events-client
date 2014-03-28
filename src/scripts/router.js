// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events', function(){
    this.resource('event', {path: ":event_id"});
  });
  this.resource('locations', function(){
    this.resource('location', {path: ":locaiton_id"});
  });
  this.resource('users', function(){
    this.resource('user', {path: ":user_id"});
  });
  this.route('login');
});

Opengov.IndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.transitionTo('events');
  }
});

Opengov.EventsIndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/index', {
      outlet: "main"
    });
  },
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/map', {
      outlet: "details"
    });
  },
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventRoute = Ember.Route.extend({
  setupController: function(controller, e){
    controller.set('model', e)
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
    controller.reset();
  }
});

