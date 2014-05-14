Opengov.ConfirmationRoute = Ember.Route.extend({
  model: function(params){
    var self, confirmation_token, store, host, namespace, url;

    self = this;
    confirmation_token = params.confirmation_token;
    store = self.store.adapterFor('application');
    host = store.get('host');
    namespace = store.get('namespace');
    url = [store.host, store.namespace, 'confirmations', confirmation_token].join('/');

    return Ember.$.ajax({
      url: url,
      type: "GET"
    }).success(function(response){
      console.log(response);
    }).error(function(response){
      console.log(response);
    });

  }
});