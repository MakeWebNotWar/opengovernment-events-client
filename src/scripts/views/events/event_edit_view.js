Opengov.EventEditView = Ember.View.extend({
  templateName: 'events/edit',
  elementId: 'event-edit-view',
  didInsertElement: function(){
    self = this;

    name = self.get('controller').get('name');
    self.get('controller').get('location').then(function(location){
      self.get('controller').set(
        'originalPropertyValues', 
        {
          "name": name,
          "location": {
            "name": location.get('name'),
            "address_1": location.get('address_1'),
            "address_2": location.get('address_2'),
            "city": location.get('city'),
            "postal_code": location.get('postal_code'),
            "country": location.get('country')
          }
        }
      );

      properties = self.get('controller').get('originalPropertyValues');
      
      console.log(properties);
    });

    

  }
});