/*global Ember*/
Opengov.Event = DS.Model.extend({
    name: DS.attr('string')
});

// probably should be mixed-in...
Opengov.Event.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Opengov.Event.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo'
    
  }
  
];
