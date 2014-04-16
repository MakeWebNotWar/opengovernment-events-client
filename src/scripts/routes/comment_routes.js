Opengov.CommentRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('comments/index');
  },
  model: function(params){
    return this.store.find('comment', params.comment_id);
  }
});