Ember.OAuth2.config = {
  twitter: {
    authBaseUri: '@@frontend/oauth/twitter/redirect.php',
    oauth_callback: 'NotRequiredBeingPassedByConfigDotPHP',
    // scope: 'basic',
    // live
    clientId: 'NotRequiredBeingPassedByConfigDotPHP',
    redirectUri: '@@frontend/oauth/twitter/callback.php',
  }
}

Opengov.TwitterOauth = Ember.OAuth2.create({providerId: 'twitter'});

Opengov.TwitterAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
  serverTokenEndpoint: function(){
    var _this, store, host, namespace, url;

    _this = this;
    store = Opengov.ApplicationAdapter.create();
    host = store.get('host');
    namespace = store.get('namespace');
    url = [host, namespace, "authentication"].join('/')
    return url;
  },
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token) || !Ember.isEmpty(data.authentication_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      // Setup handlers
      Opengov.TwitterOauth.on('success', function(stateObj) {
        // Setup the callback to resolve this function
        token = this.getAccessToken();
        token_secret = this.getTokenSecret();
        
        data = {
          authentication: {
            "provider_auth_token": token,
            "provider_name": "twitter",
            "provider_token_secret": token_secret
          }
        };
        console.log(data);
        _this.makeRequest(data).then(
          function(response) {
            console.log(response);
            Ember.run(function() {
              resolve(response);
            });
          }, 
          function(xhr, status, error) {
            Ember.run(function() {
              reject(xhr.responseJSON || xhr.responseText);
            });
          }
        );
      });// oauth.on
      Opengov.TwitterOauth.on('error', function(err) { console.log(err); reject(err.error);});
      Opengov.TwitterOauth.authorize();
    });// return
  },
  invalidate: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      // Do something with your API
      resolve();
    });
  },
  makeRequest: function(data, resolve, reject) {
    if (!Ember.SimpleAuth.Utils.isSecureUrl(this.serverTokenEndpoint)) {
      Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
    }
    return Ember.$.ajax({
      url:         this.serverTokenEndpoint(),
      type:        'POST',
      data:        data,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  }
});