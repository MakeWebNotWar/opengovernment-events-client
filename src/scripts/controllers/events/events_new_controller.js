Opengov.EventsNewController = Ember.Controller.extend({
  actions: {
    create: function(){
      var self, eventData, locationData, city, data, store, url;

      self = this;
      eventData = self.getProperties('name', 'description', 'start_date');
      locationData = self.getProperties('address_1', 'address_2', 'city', 'province', 'postal_code');
      city = self.get('city');
      locationData.name = self.get('location_name');
      data = {
        event: eventData,
        location: locationData
      };

      store = self.store.adapterFor('application');

      url = [store.host, store.namespace, 'events'].join('/');

      console.log(data);

      if (city){

        Ember.$.ajax({
          type: 'POST',
          data: data,
          url: url
        }).then(function(eve){
          console.log(eve);
          self.transitionToRoute('event', eve.event.id); 

        }, function(error){
          self.set('errorMessage', erorr.message);
          console.log(error);
        })
      }
      else {
        self.set('errorMessage', 'City cannot be empty.')
      }

      
    },
    update: function(){

    },
    delete: function(){

    }
  }
});