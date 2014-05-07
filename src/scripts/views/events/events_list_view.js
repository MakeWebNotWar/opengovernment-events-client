Opengov.EventsListView = Ember.View.extend({
  itemController: "eventsListItem",
  templateName: 'events/list',
  didInsertElement: function(){
    var self;

    self = this;

    $(window).bind('resize.eventslistview', function(){
      self.resizeElement();
    }).trigger('resize.eventslistview');
  },
  willDestroyElement: function(){
    $(window).unbind('resize.eventslistview');
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
    
    heightDiff = heightDiff - navigationHeight;

    self.$().find('ul.items').outerHeight(heightDiff);
  }
});
    