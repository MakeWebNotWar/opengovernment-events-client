Opengov.Router.reopen({
  location: 'history'
});

Opengov.Router.map(function() {
  this.route('login', {path: '/login'}, function(){

  });
  this.resource('users', { path: '/users'});
});

Opengov.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('login');
  }
});

Opengov.LoginRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('login/new');
  }
});

Opengov.LoginIndexRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('login');
  }
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