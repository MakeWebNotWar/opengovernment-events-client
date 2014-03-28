var Opengov = window.Opengov = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. asdfsdaf*/
require('scripts/controllers/{,*/}*');
require('scripts/store');
require('scripts/models/{,*/}*');
require('scripts/routes/{,*/}*');
require('scripts/views/{,*/}*');
require('scripts/router');
require('scripts/map_view');
require('scripts/helpers/{,*/}*');
require('scripts/main');
