Opengov.MapView = Ember.View.extend({
  didInsertElement: function(){
    var self;

    self = this;

    $(window).bind('resize.mapview', function(){
        self.resizeElement();
    }).trigger('resize.mapview');

    self.get('controller').mapInit();
    self.get('controller').addPins();

    setTimeout(function(){
      self.get('controller').send('setBoundingBox');
    }, 1000);


  },
  willDestroyElement: function(){
    $(window).unbind('resize.mapview');
  },
  resizeElement: function(){
    var self, topMenuHeight, footerHeight, sideMenuWidth, widthDiff;
    self = this;

    topMenuHeight = $('#top-menu').outerHeight();
    footerHeight = $('footer').outerHeight();
    sideMenuWidth = $('#side-menu').outerWidth();
    widthDiff = $(window).outerWidth() - sideMenuWidth;
    heightDiff = $(window).outerHeight() - topMenuHeight - footerHeight;

    self.$().outerWidth(widthDiff);
    self.$().outerHeight(heightDiff);

  }
});
