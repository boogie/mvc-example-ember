EmberApp.UserCardRoute = Ember.Route.extend({
    renderTemplate: function() {
	    this.render({
		    into: "application",
		    outlet : "modal"
		});
	},
	activate: function(){
		$(document.body).addClass('show-modal');
	},
	deactivate: function(){
		$(document.body).removeClass('show-modal');
	},
	setupController: function(controller, context, queryParams) {
		controller.set('user_id', EmberApp.router.currentParams.id);
	}
});
