Opengov.MainMenuProfileView = Ember.View.extend({
  templateName: 'menus/profile',
  mouseEnter: function(event, view){
    $('#profile-menu').toggle();
  },
  mouseLeave: function(event, view){
   $('#profile-menu').toggle(); 
  }
});