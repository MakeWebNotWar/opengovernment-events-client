// Opengov.ApplicationAdapter = DS.FixtureAdapter;

Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "http://localhost:3000",
  namespace: "api/v1"
});


