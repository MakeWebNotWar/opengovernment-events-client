Opengov.CommentsView = Ember.View.extend({
  templateName: 'comments/comments',
  didInsertElement: function(){
    var self;

    self = this;

    $(window).bind('resize.commentsview', function(){
      self.resizeElement();
    }).trigger('resize.commentsview');
  },
  resizeElement: function(){
    var self, windowHeight, topMenuHeight, footerHeight, heightDiff;

    self = this;
    windowHeight = $(window).outerHeight();
    topMenuHeight = $('#top-menu').outerHeight();
    footerHeight = $('footer').outerHeight();
    heightDiff = windowHeight - topMenuHeight - footerHeight; 
  
    self.$().outerHeight(heightDiff);    
  }
});