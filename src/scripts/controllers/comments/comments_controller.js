Opengov.CommentsController = Ember.ArrayController.extend({
  needs: ['event', 'reply'],
  itemController: 'comment',
  sortProperties: ['created_at'],
  sortAscending: false,
});