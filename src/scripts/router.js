// Opengov.Router.reopen({
//   location: 'history'
// });

Opengov.Router.map(function() {
  this.resource('events', function(){
    this.resource('event', {path: ":event_id"}, function(){
      this.route('edit');
      this.resource('comments');
    });
    this.route('new');
  });

  this.resource('comments', {path: "comments/:comment_id"});
  this.route('profile');
  this.route('login');
  this.route('signup');
});