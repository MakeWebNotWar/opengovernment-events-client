// Notification Model

Opengov.Notification = DS.Model.extend({
  text: DS.attr('string'),
  read: DS.attr('boolean'),
  read_at: DS.attr('string')
});