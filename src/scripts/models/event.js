// Event Model

Opengov.Event = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  location: DS.belongsTo('location', {async: true}),
  start_date: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true}),
  user: DS.belongsTo('user', {async: true})
});