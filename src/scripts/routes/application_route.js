Opengov.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin,{
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('login').set('errorMessage', error.message);
    },
    authenticateWithTwitter: function() {
      this.get('session').authenticate('authenticator:twitter', {});
    },
    authenticateWithFacebook: function() {
      this.get('session').authenticate('authenticator:facebook', {});
    },
    notificationRead: function(notification){
      var self, store, data, url;

      self = this;
      store = self.store.adapterFor('application');
      data = {
        notification: {
          read: true
        }
      };
      url = [store.host, store.namespace, 'notifications', comment.id].join('/');
      
      Ember.$.ajax({
        type: "PUT",
        data: data,
        url: url,
        headers: {
          "X-Authentication-Token": self.get('session.authentication_token'),
          "X-User-Email": self.get('session.user_email')
        }
      }).then(
        function(){
          
        },
        function(response){
        
        }
      );

    }

  }
});
