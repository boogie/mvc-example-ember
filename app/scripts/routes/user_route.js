EmberApp.UserRoute = Ember.Route.extend({
  actions: {
    doSearch: function(query) {
      if (query && query !== '') {
        this.transitionTo('user.search', { queryParams: {query: query} });
      }
    }
  }
});
