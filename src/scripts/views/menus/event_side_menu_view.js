Opengov.EventSideMenuView = Ember.View.extend({
  templateName: 'menus/event_side_menu',
  didInsertElement: function(){
    var windowHeight, topMenuHeight, navigationHeight, footerHeight;

    windowHeight = $(window).outerHeight();
    topMenuHeight = $('#top-menu').outerHeight();
    navigationHeight = $('.navigation').outerHeight();
    footerHeight = $('footer').outerHeight();

    heightDiff = windowHeight - topMenuHeight - footerHeight;

    this.$().outerHeight(heightDiff);
    
    heightDiff = heightDiff - navigationHeight;

    this.$().find('ul.items').outerHeight(heightDiff);
  }
})