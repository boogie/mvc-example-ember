EmberApp.router = Ember.Router.map(function () {
	this.resource('home');
	this.resource('user', function(){
		this.route('search', { queryParams: ['query'] });
	});
});

