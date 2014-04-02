Opengov.CommentsController = Ember.ArrayController.extend({
  itemController: 'comment'
});

Opengov.CommentController = Ember.ObjectController.extend({
  needs: ['user']  
});