Opengov.SignupRoute = Ember.Route.extend({
  actions: {
    signup: function(){
      var self, store, host, namespace, url, data;

      self = this;
      store = self.store.adapterFor('application');
      host = store.get('host');
      namespace = store.get('namespace');
      url = [store.host, store.namespace, 'signup'].join('/');


      console.log(url);
    }
  }
});