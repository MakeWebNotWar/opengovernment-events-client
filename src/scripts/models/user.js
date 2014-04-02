// User Model

Opengov.User = DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  gravatarID: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true})
});