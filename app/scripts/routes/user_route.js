EmberApp.UserRoute = Ember.Route.extend({
  actions: {
    doSearch: function(query) {
      this.transitionTo('user.search', { queryParams: {query: query} });
    }
  }
});
