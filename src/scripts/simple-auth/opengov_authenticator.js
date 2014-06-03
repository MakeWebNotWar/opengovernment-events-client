// Custom Authenticator based on [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth#implementing-a-custom-authenticator)

Opengov.CustomAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({

  serverTokenEndpoint: function(){
    var _this, store, host, namespace, url;

    _this = this;
    store = Opengov.ApplicationAdapter.create();
    host = store.get('host');
    namespace = store.get('namespace');
    url = [host, namespace, "authentication"].join('/')
    return url;
  },

   authenticate: function(credentials) {
    var _this = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      // var data = { 
      //   authentication: {
      //     user_email: credentials.identification, 
      //     user_password: credentials.password 
      //   }
      // };
      var headers = {
        "X-User-Email": credentials.identification,
        "X-User-Password": credentials.password
      };
      _this.makeRequest(headers).then(
        function(response) {
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
    });
  },

  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.authentication_token) && !Ember.isEmpty(properties.user_email)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  },

  makeRequest: function(headers, resolve, reject) {
    if (!Ember.SimpleAuth.Utils.isSecureUrl(this.serverTokenEndpoint)) {
      Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
    }
    return Ember.$.ajax({
      url:         this.serverTokenEndpoint(),
      type:        'POST',
      headers:     headers,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  }

});