EmberApp.UserController = Ember.Controller.extend({
  query: '',

  queryDidChange: function() {
    var query = this.get('query');
    this.send('doSearch', query);
  }.observes('query')
});
