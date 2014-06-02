Opengov.CustomAuthorizer = Ember.SimpleAuth.Authorizers.Base.extend({
  authorize: function(jqXHR, requestOptions) {
    var authToken = this.get('session.authentication_token');
    var authEmail = this.get('session.user_email');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(authToken) && !Ember.isEmpty(authEmail)) {
      if (!Ember.SimpleAuth.Utils.isSecureUrl(requestOptions.url)) {
        Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
      }
      jqXHR.setRequestHeader('X-Authentication-Token', authToken);
      jqXHR.setRequestHeader('X-User-Email', authEmail);
    }
  }
});