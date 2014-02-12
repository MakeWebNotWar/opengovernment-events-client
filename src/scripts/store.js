Opengov.ApplicationAdapter = DS.RESTAdapter;


DS.RESTAdapter.reopen({
  host: "http://localhost:3000",
  namespace: "api/v1"
});