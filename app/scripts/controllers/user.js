EmberApp.UserController = Ember.Controller.extend({
	init: function(){
		this._super();
		var query = EmberApp.router.currentParams.query;
		if (query) {
			this.set('query', query);
			this.send('doSearch');
		}
	},
	query: '',
	actions: {
	    doSearch: function(){
	    	var query = this.get('query');
	    	// set the location
	    	if (query) {
		    	window.location.href='#/user/search/' + query;
	    	} else {
	    		window.location.href='#/user';
	    	}
	    	// "get" the results and assign it to the view
            var results = [];
            for (var i = 0; i < query.length; i++) {
                results.push({ 'num': i+1, 'char': query[i], 'code': query.charCodeAt(i) });
            }
	    	this.set('results', results);
	    }
	}
});
