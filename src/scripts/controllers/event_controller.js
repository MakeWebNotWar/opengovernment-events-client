Opengov.EventController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user'],
  itemController: 'event.details'
});
