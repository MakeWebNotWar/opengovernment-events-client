Opengov.EventEditController = Ember.ObjectController.extend({
  actions: {
    updateEvent: function(){
      var self, eventData, locationData, city, data, store, url;

      self = this;
      eventData = self.getProperties('name', 'description', 'start_date');
      locationData = self.getProperties('address_1', 'address_2', 'city', 'province', 'postal_code');
      eventName = self.get('name');
      city = self.get('city');
      locationData.name = self.get('location_name');
      data = {
        event: eventData,
        location: locationData
      };

      store = self.store.adapterFor('application');

      url = [store.host, store.namespace, 'events'].join('/');

      console.log(data);

      if (eventName && city){
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
        if(!eventName){
          self.set('errorMessage', 'Event Name cannot be empty.')
        }
        else if(!city) {
          self.set('errorMessage', 'City cannot be empty.')
        }
      }

    },
    reset: function(){
      var self;
      self = this;
      properties = self.get('originalPropertyValues');
      self.setProperties(properties);
      self.get('location').setProperties(properties.location);
      console.log(properties);
      this.transitionToRoute('event', this.get('id'));
    }
  }
});