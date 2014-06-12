Opengov.OrganizerCommentsView = Ember.View.extend({
  templateName: 'organizer_comments/comments',
  elementId: 'organizer-comments',
  didInsertElement: function(){
    var self, windowWidth, sidemenuWidth, diff;

    self = this;
    windowWidth = $(window).outerWidth();
    sidemenuWidth = $('#side-menu').outerWidth();
    diff = windowWidth - sidemenuWidth;
    diff = diff/2;

    self.$().outerWidth(diff);
  }
});