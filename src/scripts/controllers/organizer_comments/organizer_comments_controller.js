Opengov.OrganizerCommentsController = Ember.ArrayController.extend({
  needs: ['event', 'user'],
  itemController: 'organizerComment',
  sortProperties: ['created_at'],
  sortAscending: false,
  isOrganizer: function(){
    var self, session, user_id, result;

    self = this;
    session = self.get('session');
    user_id = session.get('user_id');
    result = false;

    self.get('parentController').get('organizers').forEach(function(organizer){
      id = organizer.id;
      if(id === user_id){
        result = true;
      }
    });

    return result;
  }.property('parentController.organizers.@each'),
    actions: {
    createComment: function(){
      var self, store, url, text, data;

      self = this;
      store = self.store.adapterFor('application');
      url = [store.host, store.namespace, 'ocomments'].join('/');
      text = self.get('text');
      
      data = {
        comment: {
          event: self.get('parentController.id'),
          text: text
        }
      };

      Ember.$.ajax({
        url:url, 
        data: data,
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        headers: {
          "X-Authentication-Token": self.get('session.authentication_token'),
          "X-User-Email": self.get('session.user_email')
        }
      }).then(
        function(response) {
          var store, comment;

          store = self.store;
          comment = response.ocomment;

          store.find('user', comment.user).then(function(user){
            delete comment.user;
            comment.user = user;
            store.find('event', comment.event).then(function(event){
              delete comment.event;    
              comment.event = event;
              comment = store.createRecord('ocomment', comment);
              self.addObject(comment);
              self.set('text', null);
              $('.editable').html("");
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