$(function(){
  $(window).load(function(){
    $(window).resize(function(){
      adjust_main_height();
      adjust_map_width();
      adjust_side_menu_height();
    }).resize();
  }); 
});

function adjust_main_height() {
  var window_height = $(window).height(),
      top_menu_height = $('#top-menu').outerHeight(),
      footer_height = $('footer').outerHeight(),
      diff = window_height - (top_menu_height + footer_height);

  $('#main').css('height', diff);
}

function adjust_map_width() {
  var window_width = $(window).width(),
      side_menu_width = $('#side-menu').outerWidth(),
      diff = window_width - side_menu_width;

  $('#map, #form-area, #comments').outerWidth(diff);

  // crappy Chrome 34 fix for map load issues...
  map_width = $('#map').width();
  map_height = $('#map').height();
  if (Opengov.Map.map){
    Opengov.Map.map.setOptions({height: map_height, width: map_width });
  }
}

function adjust_side_menu_height(){
  var main_area_height = $('#main').outerHeight(),
      navigation_height = $('.navigation').outerHeight(),
      diff = main_area_height - navigation_height;

  $('ul.items').outerHeight(diff);
}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49576165-1', 'webnotwar.ca');
ga('send', 'pageview');

Ember.GoogleAnalyticsTrackingMixin = Ember.Mixin.create({
  pageHasGa: function() {
    return window.ga && typeof window.ga === "function";
  },

  trackPageView: function(page) {
    if (this.pageHasGa()) {
      if (!page) {
        var loc = window.location;
        page = loc.hash ? loc.hash.substring(1) : loc.pathname + loc.search;
      }

      ga('send', 'pageview', page);
    }
  },

  trackEvent: function(category, action, label, value) {
    if (this.pageHasGa()) {
      ga('send', 'event', category, action, label, value);
    }
  }
});
Ember.Application.initializer({
  name: "googleAnalytics",

  initialize: function(container, application) {
    var router = container.lookup('router:main');
    router.on('didTransition', function() {
      this.trackPageView(this.get('url'));
    });
  }
});
Ember.Router.reopen(Ember.GoogleAnalyticsTrackingMixin);