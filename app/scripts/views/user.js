EmberApp.UserView = Ember.View.extend({
	willDestroyElement: function() {
		this.get('controller').set('query', '');
		this.get('controller').set('results', '');
	}
});
