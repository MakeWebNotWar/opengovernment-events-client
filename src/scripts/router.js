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
  this.resource('signup');
});