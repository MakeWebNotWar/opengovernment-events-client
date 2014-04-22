Opengov.EventsIndexController = Ember.ArrayController.extend({
  itemController: 'event',
  actions: {
    centerToUser: function(){
      Opengov.Map.centerToUser();
    },
    boundToEvents: function(){
      a = Opengov.Map.setBoundingBox(Opengov.Map.eventsPushPinsLayer);
    }
  },

});

Opengov.EventController = Ember.ObjectController.extend({
  needs: ['comment', 'user'],
  itemController: 'event.details'
});

// Opengov.EventDetailsController = Ember.ObjectController.extend({

// });

Opengov.EventsNewController = Ember.Controller.extend(Opengov.Authentication, {
  actions: {
    create: function(){
      var self, store, url, authentication, event, data;
      
      self = this;

      store = self.store.adapterFor('application');

      url = [store.host, store.namespace, 'events'].join('/');

      authentication = self.getProperties(
        'user_email', 
        'authentication_token'
      );

      event = self.getProperties(
        'name',
        'description',
        'url',
        'start_date',
        'end_date',
        'type',
        'user'
      );

      data = {
        authentication: authentication,
        event: event
      };

      Ember.$.post(url,data).then(
        function(response){
          var event = response.event;
          console.log("Success:" + event);
          self.transitionToRoute('event', event.id);
        },
        function(response){
          self.set('errorMessage', response.message);
          console.log(response);
        }
      );
    },
    update: function(){

    },
    delete: function(){

    }
  }
});