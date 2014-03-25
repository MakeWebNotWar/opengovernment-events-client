// Opengov.ApplicationAdapter = DS.FixtureAdapter;

Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "http://api.peopleandcode.com",
  namespace: "api/v1"
});


