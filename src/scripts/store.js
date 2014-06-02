Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "@@store",
  namespace: "api/v1",
  headers: function(){
    
  }
});