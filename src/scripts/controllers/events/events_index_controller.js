Opengov.EventsIndexController = Ember.ArrayController.extend(Opengov.MapMixin, {
  itemController: 'eventsListItem',
  sortProperties: ['start_date'],
  sortAscending: true
});