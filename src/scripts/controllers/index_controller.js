Opengov.IndexController = Ember.Controller.extend({
  loggedIn: function(){
    return this.controllerFor('login').get('loggedIn');
  }.observes('login.loggedIn'),
  action:{
    logout: function(){
      this.controllerFor('login').send('logout');
    }
  }
});