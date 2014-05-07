Opengov.CommentNewView = Ember.View.extend({
  templateName: 'comments/new',
  actions: {
    createComment: function(){
      data = this.get('text');
      console.log(data);
    }
  }
});