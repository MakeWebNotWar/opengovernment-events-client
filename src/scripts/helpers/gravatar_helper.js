Ember.Handlebars.helper('gravatar-url', function(gravatarID, size) {
  var result = "<img src='http://gravatar.com/avatar/" + gravatarID + ".png'>";
  return new Handlebars.SafeString(result);
});
