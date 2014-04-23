Opengov.CommentsView = Ember.View.extend({
  templateName: 'comments/comments',
  didInsertElement: function(){
    var sideMenuWidth;
    
    sideMenuWidth = $('#side-menu').outerWidth();
    diff = $(window).outerWidth() - sideMenuWidth;
    
    this.$().outerWidth(diff);
  }
});