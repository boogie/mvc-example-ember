EmberApp.UserRoute = Ember.Route.extend({
  setupController: function(controller, context, queryParams) {
    controller.set('query', '');
  }
});
