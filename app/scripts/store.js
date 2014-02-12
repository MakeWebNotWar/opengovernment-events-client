Opengov.ApplicationAdapter = DS.RESTAdapter;


DS.RESTAdapter.reopen({
  location: "http://localhost:3000",
  namespace: "api/v1"
});