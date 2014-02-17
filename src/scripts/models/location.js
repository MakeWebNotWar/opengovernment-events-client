// Location Model

Opengov.Location = DS.Model.extend({
  name: DS.attr('string'),
  address_1: DS.attr('string'),
  address_2: DS.attr('string'),
  city: DS.attr('string'),
  province: DS.attr('string'),
  postal_code: DS.attr('string'),
  country: DS.attr('string'),
  events: DS.hasMany('event', {async: true})
});