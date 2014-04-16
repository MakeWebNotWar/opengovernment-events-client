// Opengov.ApplicationAdapter = DS.FixtureAdapter;

Opengov.ApplicationAdapter = DS.RESTAdapter;

Opengov.ApplicationAdapter.reopen({
  // host: "http://api.peopleandcode.com",
  host: "http://localhost:3000",
  namespace: "api/v1",
  // headers: {
  //   "X-Authentication-Token": Opengov.AuthenticationController.get('authentication_token'),
  //   "X-User-Email": Opengov.AuthenticationController.get('user_email')
  // }
});