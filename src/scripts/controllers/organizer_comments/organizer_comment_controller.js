Opengov.OrganizerCommentController = Ember.ObjectController.extend({
  needs: ['user', 'event'],
  actions: {
    destroyComment: function(comment){
      var self, store, url;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'ocomments', comment.id].join('/');

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
            return record.get('ocomments');
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