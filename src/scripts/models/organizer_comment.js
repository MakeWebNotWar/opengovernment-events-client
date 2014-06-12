Opengov.OrganizerComment = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  event: DS.belongsTo('event', {async: true}),
  replies: DS.hasMany('organizerReply', {async: true}),
  created_at: DS.attr('string'),
  updated_at: DS.attr('string')
});