// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events');
  this.resource('event', {path: "events/:event_id"});
  this.route('login');
  this.resource('locations');
  this.resource('comments', {path: "comments/:comment_id"});
  this.resource('login');
});

Opengov.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('events');
  }
});

Opengov.EventsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/events', {
      outlet: "main",
      into: "application"
    });
  },
  model: function(){
    return this.store.find('event');
  }
});

Opengov.EventRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('events/details', {
      outlet: "main"
    });
  },
  model: function(params){
    return this.store.find('event', params.event_id)
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

Opengov.CommentRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('comments/index');
  },
  model: function(params){
    return this.store.find('comment', params.comment_id);
  }
});

Opengov.LoginRoute = Ember.Route.extend({
  setupController: function(controller, context) {
  }
});