Opengov.LocalStorage = Ember.Object.extend({
  unknownProperty: function(key) {
    return localStorage[key];
  },

  setUnknownProperty: function(key, value) {
    localStorage[key] = value;
    this.notifyPropertyChange(key);
    return value;
  }
});