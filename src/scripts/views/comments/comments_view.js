Opengov.CommentsView = Ember.View.extend({
  templateName: 'comments/comments',
  didInsertElement: function(){
    var self;

    self = this;

    $(window).on('resize.commentsview', function(){
      self.resizeElement();
    }).resize();
  },
  willDestroyElement: function(){
    $(window).off('resize.commentsview');
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