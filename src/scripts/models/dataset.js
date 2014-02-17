// Dataset Model

Opengov.Dataset = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  events: DS.hasMany('event', {async: true})
});