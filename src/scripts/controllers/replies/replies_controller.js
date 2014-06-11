Opengov.RepliesController = Ember.ArrayController.extend({
  itemController: 'reply',
  sortProperties: ['created_at'],
  sortAscending: true,
});