Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){
    var self, map, topMenuHeight, footerHeight, sideMenuWidth, widthDiff, locations, collection;

    self = this;
    topMenuHeight = $('#top-men').outerHeight();
    footerHeight = $('footer').outerHeight();
    sideMenuWidth = $('#side-menu').outerWidth();
    widthDiff = $(window).outerWidth() - sideMenuWidth;
    heightDiff = $(window).outerHeight() - topMenuHeight - footerHeight;

    self.$().outerWidth(widthDiff);
    self.$().outerHeight(heightDiff);

    self.get('controller').map();
    self.get('controller').addPushPins();

    setTimeout(function(){
      self.get('controller').send('setBoundingBox');
    }, 1000);

  }
});
