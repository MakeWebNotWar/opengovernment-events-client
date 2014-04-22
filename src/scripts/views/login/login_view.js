Opengov.LoginView = Ember.View.extend({
  templateName: "login/login",
  elementId: "login-view",
  didInsertElement: function(){
    this.resizeView();
  },
  resizeView: function(){
    var windowHeight = $(window).outerHeight(),
        topMenuHeight = $('#top-menu').outerHeight(),
        footerHeight = $('footer').outerHeight(),
        diff = windowHeight - (topMenuHeight + footerHeight);

    this.$().css('min-height', diff);
  }
});