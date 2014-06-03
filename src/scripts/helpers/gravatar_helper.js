Ember.Handlebars.helper('gravatar-image', function(gravatarID) {
  var result;

  result = "<img src='http://gravatar.com/avatar/" + gravatarID + "?s=200&d=mm'>";
  
  return new Handlebars.SafeString(result);
});
