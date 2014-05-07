Opengov.EventController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user'],
  actions: {
    createComment: function(){
      var self, store, url, data;

      self = this;
      window.ray = self;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'comments'].join('/');

      data = {
        comment: {
          event_id: self.get('id'),
          text: self.get('new_comment_text'),
          user_id: self.get('session.user_id')
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

          
          comment = self.get('store').push('comment', response.comment);

          self.get('comments').pushObject(comment);
          console.log(comment);
          console.log(response);
          
        
        },
        function(response){
          self.set('errorMessage', response.responseJSON.message)
        }
      );
      
    }
  }
});
