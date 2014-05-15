Opengov.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin,{
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('login').set('errorMessage', error.message);
    },
    sessionInvalidationSucceeded: function(){
      session = this.controllerFor('login').get('session');
      this.transitionTo(session.attemptedTransition);
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
          comment.deleteRecord();
        },
        function(response){
          console.log(response);
        }
      )
    }
  }
});
