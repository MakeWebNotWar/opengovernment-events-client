// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events', function(){
    this.resource('event', {path: ':event_id'}, function(){
      this.route('edit');
    });
    this.route('new');
  });
  this.resource('comments', {path: "comments/:comment_id"});
  this.route('profile');
  this.route('login');
  this.resource('signup', function(){
    this.route('new');
    this.route('success');
  });
  this.resource('confirmation', {path: "confirmation/:confirmation_token"});
  
  this.resource('profile', function(){
    this.route('show', {path: ":user_id"});
    this.route('edit', {path: ":user_id/edit"});
  });

});