Opengov.CommentsView = Ember.View.extend({
  templateName: 'comments/comments',
  didInsertElement: function(){
    var self;

    self = this;

    this.$(window).bind('resize.commentsview', function(){
      self.resizeElement();
    }).trigger('resize.commentsview');
  },
  willDestroyElement: function(){
    this.$(window).unbind('resize.commentsview');
  },
  resizeElement: function(){
    var windowHeight, topMenuHeight, footerHeight, heightDiff;

    windowHeight = $(window).outerHeight();
    topMenuHeight = $('#top-menu').outerHeight();
    footerHeight = $('footer').outerHeight();
    heightDiff = windowHeight - topMenuHeight - footerHeight; 
  
    this.$().outerHeight(heightDiff);    
  }
});