EmberApp.router = Ember.Router.map(function () {
	this.resource('index', { path: 'home' });
	this.resource('user', function(){
		this.route('search', { path: 'search/:query' })
	});
	// not perfect
	this.resource('notfound', { path: '' });
});

