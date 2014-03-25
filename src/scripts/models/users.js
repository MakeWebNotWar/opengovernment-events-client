// User Model

Opengov.User = Ember.Object.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string')
});