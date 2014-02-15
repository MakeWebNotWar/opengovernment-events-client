// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.route('login', {path: '/login'}, function(){

  });
  this.resource('users');
  this.resource('events');
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
  }
});

Opengov.LoginRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('login/old');
  }
});

Opengov.LoginIndexRoute = Ember.Route.extend({
  
});

Opengov.UsersRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('users/index');
  }
});

Opengov.UsersIndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('users/index');
  }
});