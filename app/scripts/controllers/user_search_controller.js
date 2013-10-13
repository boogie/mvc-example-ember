EmberApp.UserSearchController = Ember.ArrayController.extend({
  needs: ['user'],
  query: Ember.computed.alias('controllers.user.query'),

  results: function() {
    var query = this.get('query') || '',
        results = [];

    for (var i = 0; i < query.length; i++) {
       results.push({ 'num': i+1, 'char': query[i], 'code': query.charCodeAt(i) });
    }

    return results;
  }.property('query')
});
