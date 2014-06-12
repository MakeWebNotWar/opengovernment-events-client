Opengov.EventIndexController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user', 'login', 'organizerComment']
});
