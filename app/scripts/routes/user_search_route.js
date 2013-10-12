EmberApp.UserSearchRoute = Ember.Route.extend({
  setupController: function(controller, context, queryParams) {
    controller.set('query', queryParams.query || '');
  },

  deactivate: function() {
    this.controllerFor('user.search').set('query', null);
  },

  actions: {
    doSearch: function(query) {
      if (query && query !== '') {
        this.replaceWith('user.search', {queryParams: { query: query }})
      } else {
        this.transitionTo('user', {queryParams: { query: false }})
      }
    }
  }
});
