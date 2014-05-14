Opengov.CommentView = Ember.View.extend({
  templateName: 'comments/comment',
  tagName: 'li',
  classNames: ["comment"],
  didInsertElement: function(){
    window.ray = this;
  }
});