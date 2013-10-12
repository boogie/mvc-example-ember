EmberApp.UserSearchRoute = Ember.Route.extend({
  setupController: function(controller, context, queryParams) {
    controller.set('query', queryParams.query || '');
  },

  actions: {
    doSearch: function(query) {
      this.replaceWith('user.search', {queryParams: { query: query }})
    }
  }
});
