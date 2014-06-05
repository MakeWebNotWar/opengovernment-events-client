Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  host: "https://api.peopleandcode.com",
  namespace: "api/v1"
});