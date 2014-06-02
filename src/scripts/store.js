Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "@@sever_endpoint",
  namespace: "api/v1",
  headers: function(){
    
  }
});