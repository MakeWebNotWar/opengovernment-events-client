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
  serverEndpoint: function(){
    var _this, store, host, namespace, url;

    _this = this;
    store = Opengov.ApplicationAdapter.create();
    host = store.get('host');
    namespace = store.get('namespace');
    url = [host, namespace].join('/')
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
        signup = this.getSignup();
        console.log("signup: " + signup);
      
        headers = {
          "X-Provider-Auth-Token": token,
          "X-Provider-Token-Secret": token_secret,
          "X-Provider-Name": "twitter"
        };
        
        if(signup === "true") {
          headers["X-Signup"] = true
        }
        
        console.log(headers);
        _this.makeRequest(headers).then(
          function(response) {
            console.log(response);
            Ember.run(function() {
              resolve(response);
            });
          }, 
          function(response) {
            Ember.run(function() {
              console.log(response);
              reject(response);
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
  makeRequest: function(headers, resolve, reject) {
    if (!Ember.SimpleAuth.Utils.isSecureUrl(this.serverTokenEndpoint)) {
      Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
    }
    
    url = this.serverEndpoint();

    if(headers["X-Signup"]){
      url = url + "/signup"
    }
    else {
      url = url + "/authentication"
    }

    return Ember.$.ajax({
      url:         url,
      type:        'POST',
      headers:     headers,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  }
});