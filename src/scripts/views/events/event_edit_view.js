Opengov.EventEditView = Ember.View.extend({
  templateName: 'events/edit',
  elementId: 'event-edit-view',
  didInsertElement: function(){
    console.log('inserted');

    name = this.get('controller').get('name');

    this.get('controller').set(
      'originalPropertyValues', 
      {
        name: name
      }
    );

    properties = this.get('controller').get('originalPropertyValues');

    console.log(name);
    console.log(properties);
  }
});