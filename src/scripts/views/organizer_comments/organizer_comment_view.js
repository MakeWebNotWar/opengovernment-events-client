Opengov.OrganizerCommentView = Ember.View.extend({
  templateName: 'organizer_comments/comment',
  tagName: 'li',
  classNames: ["comment"],
  didInsertElement: function(){
    var self, controller, commentUser, sessionUser, result;

    self = this;
    controller = self.get('controller');
    commentUser = self._parentView.get('content').get('user');

    commentUser.then(
      function(user){
        sessionUser = controller.get('session.user_id');
        result =  user.id === sessionUser;
        self._parentView.content.set('isOwner', result);
      }
    ); 
  },

});