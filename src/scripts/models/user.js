// User Model

Opengov.User = DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  gravatarID: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true}),
  events: DS.hasMany('event', {async: true}),
  notifications: DS.hasMany('notification', {async: true})
});