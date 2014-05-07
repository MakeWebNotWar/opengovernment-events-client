Opengov.EventController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user'],
  actions: {
    createComment: function(){
      var self, store, url, data;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'comments'].join('/');

      data = {
        comment: {
          event_id: self.get('id'),
          text: self.get('new_comment_text'),
          owner: self.get('session.user_id')
        }
      };

      console.log(data);
      Ember.$.ajax({
        url:url, 
        data: data,
        type: "POST",
        headers: {
          "authentication-token": self.get('session.authentication_token'),
          "user-email": self.get('session.user_email')
        }
      }).then(
        function(response) {

          if (response.success) {
            console.log(response.message);
          }
          else {
            console.log(response.message);
            self.set('errorMessage', response.message);
          }
        },
        function(response){
          self.set('errorMessage', response.responseJSON.message)
        }
      );
      
    }
  }
});
