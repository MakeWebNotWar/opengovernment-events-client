Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "@@server_endpoint",
  namespace: "api/v1",
  headers: function(){
    
  }
});