EmberApp.UserController = Ember.Controller.extend({
  query: '',

  queryDidChange: function() {
    var query = this.get('query');
    this.send('updateRoute', query);
  }.observes('query'),

  actions: {
    updateRoute: function(query) {
		if (query) {
			this.replaceRoute('user.search', {queryParams: { query: query }})
		} else
		if (query !== null) {
			this.transitionToRoute('user')
		}
    }
  }
});
