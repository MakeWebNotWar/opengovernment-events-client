Opengov.EventsNewController = Ember.Controller.extend({
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