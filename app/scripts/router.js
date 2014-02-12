Opengov.Router.map(function () {
  
  this.resource('events', function(){
    this.resource('event', { path: '/:event_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
