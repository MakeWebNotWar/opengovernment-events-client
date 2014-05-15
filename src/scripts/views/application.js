Opengov.ApplicationView = Ember.View.extend({
  didInsertElement: function(){
    var self;

    self = this;

    self.$(window).bind('resize.mainview', function(){
      self.resizeElement();
    }).trigger('resize.mainview');
  },
  willDestroyElement: function(){
    self.$(window).unbind('resize.mainview');
  },
  resizeElement: function(){
    var windowHeight, menuHeight, footerHeight, heightDiff;

    windowHeight = this.$(window).outerHeight();
    menuHeight = this.$('#top-menu').outerHeight();
    footerHeight = this.$('footer').outerHeight();
    heightDiff = windowHeight - menuHeight - footerHeight;

    this.$('#main').css('height', heightDiff);
  }
});