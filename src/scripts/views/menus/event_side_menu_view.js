Opengov.EventSideMenuView = Ember.View.extend({
  templateName: 'menus/event_side_menu',
  didInsertElement: function(){
    var self;

    self = this;

    self.$(window).bind('resize.eventsidemenu', function(){
      self.resizeElement();
    }).trigger('resize.eventsidemenu'); 
  },
  willDestroyElement: function(){
    var self;

    self = this;

    self.$(window).unbind('resize.eventsidemenu');
  },
  resizeElement: function(){
    var self, windowHeight, topMenuHeight, navigationHeight, footerHeight;
    
    self = this;
    windowHeight = $(window).outerHeight();
    topMenuHeight = $('#top-menu').outerHeight();
    navigationHeight = $('.navigation').outerHeight();
    footerHeight = $('footer').outerHeight();
    heightDiff = windowHeight - topMenuHeight - footerHeight;

    self.$().outerHeight(heightDiff);
  }
})