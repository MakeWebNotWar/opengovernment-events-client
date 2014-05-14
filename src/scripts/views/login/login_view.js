Opengov.LoginView = Ember.View.extend({
  templateName: "login/login",
  elementId: "login-view",
  didInsertElement: function(){
    var self;

    self = this;

    self.$(window).bind('resize.loginview', function(){
      self.resizeView();
    }).trigger('resize.loginview');
  },
  resizeView: function(){
    var self, windowHeight, topMenuHeight, footerHeight, diff;

    self = this;
    windowHeight = $(window).outerHeight(),
    topMenuHeight = $('#top-menu').outerHeight(),
    footerHeight = $('footer').outerHeight(),
    diff = windowHeight - (topMenuHeight + footerHeight);

    self.$().css('min-height', diff);
  }
});