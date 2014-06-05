Opengov.ProfileEditController = Ember.ObjectController.extend({
  actions: {
    updateProfile: function(){
      var self;

      self = this;

      self.get('model').save().then(function(profile){
        self.transitionToRoute('profile.show', profile);
      });
    }
  }
});