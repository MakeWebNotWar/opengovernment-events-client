Opengov.EventController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user'],
  itemController: 'event.details',
  // actions: {
  //   createComment: function(){
  //     data = this.getProperties('comment_id', 'comment_text')
  //     console.log(data);
  //   }
  // }
});
