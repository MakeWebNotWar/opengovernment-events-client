Opengov.EventController = Ember.ObjectController.extend(Opengov.MapMixin, {
  needs: ['comment', 'user', 'login'],
  actions: {
    createComment: function(){
      var self, store, url, data;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'comments'].join('/');

      data = {
        comment: {
          event_id: self.get('id'),
          text: self.get('new_comment_text')
        }
      };

      Ember.$.ajax({
        url:url, 
        data: data,
        type: "POST",
        headers: {
          "X-Authentication-Token": self.get('session.authentication_token'),
          "X-User-Email": self.get('session.user_email')
        }
      }).then(
        function(response) {          
          comment = self.get('store').push('comment', response.comment);

          self.get('comments').pushObject(comment);
        },
        function(response){
          self.set('errorMessage', response.message)
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
          self.get('comments').removeObject(comment);
          console.log("removed comment");
        },
        function(response){
          console.log(response);
        }
      )
    }

  }
});
