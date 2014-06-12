// Event Model

Opengov.Event = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  location: DS.belongsTo('location', {async: true}),
  start_date: DS.attr('string'),
  start_time: DS.attr('string'),
  end_date: DS.attr('string'),
  end_time: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true}),
  ocomments: DS.hasMany('ocomment', {async: true}),
  owner: DS.belongsTo('user', {async: true}),
  organizers: DS.hasMany('user', {async: true}),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string')
});