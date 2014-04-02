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
}

function adjust_side_menu_height(){
  var main_area_height = $('#main').outerHeight(),
      navigation_height = $('.navigation').outerHeight(),
      diff = main_area_height - navigation_height;

  $('ul.items').outerHeight(diff);
}