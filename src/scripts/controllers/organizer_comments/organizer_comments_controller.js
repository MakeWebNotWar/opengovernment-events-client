Opengov.OrganizerCommentsController = Ember.ArrayController.extend({
  needs: ['event', 'user'],
  itemController: 'communityComment',
  sortProperties: ['created_at'],
  sortAscending: false,
  actions: {
    createComment: function(){
      var self, store, url, data;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'organizer_comments'].join('/');

      data = {
        comment: {
          event: self.get('parentController.id'),
          text: self.get('text')
        }
      };

      Ember.$.ajax({
        url:url, 
        data: data,
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        headers: {
          "X-Authentication-Token": self.get('session.authentication_token')
        }
      }).then(
        function(response) {
          var store, comment;

          store = self.store;
          comment = response.comment;

          store.find('user', comment.user).then(function(user){
            delete comment.user;
            comment.user = user;
            store.find('event', comment.event).then(function(event){
              delete comment.event;    
              comment.event = event;
              comment = store.createRecord('organizer_comment', comment);
              self.addObject(comment);
              self.set('text', null);
            });
          });
        },
        function(response){
          self.set('errorMessage', response.message)
        }
      );  
    },
  }

});