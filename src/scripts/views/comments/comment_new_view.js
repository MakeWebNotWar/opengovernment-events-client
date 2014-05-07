Opengov.CommentNewView = Ember.View.extend({
  templateName: 'comments/new',
  didInsertElement: function(){
    this.get('controller').set('new_comment_text', "");
  }
});