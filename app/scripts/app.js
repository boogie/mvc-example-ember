Ember.ENV.ENABLE_ALL_FEATURES = true;

var EmberApp = window.EmberApp = Ember.Application.create();

Ember.TextField.reopen({
  attributeBindings: ['autofocus']
});


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
