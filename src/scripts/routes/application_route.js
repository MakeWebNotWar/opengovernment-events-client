Opengov.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin,{
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('login').set('errorMessage', error.message);
    },
    sessionInvalidationSucceeded: function(){
      session = this.controllerFor('login').get('session');
      this.transitionTo(session.attemptedTransition);
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

    },
    destroyComment: function(comment){
      var self, store, url;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'comments', comment.id].join('/');

      Ember.$.ajax({
        type: "DELETE",
        url: url,
        headers: {
          "X-Authentication-Token": self.get('session.authentication_token'),
          "X-User-Email": self.get('session.user_email')
        }
      }).then(
        function(){
          comment.get('event').then(function(record){
            return record.get('comments');
          }).then(function(comments){
            comments.removeObject(comment);
          });

          comment.get('user').then(function(record){
            return record.get('comments');
          }).then(function(comments){
            comments.removeObject(comment);
          });
        },
        function(response){
          console.log("Can't Delete");
        }
      )
    }
  }
});
