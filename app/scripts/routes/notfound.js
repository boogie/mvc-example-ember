EmberApp.NotfoundRoute = Ember.Route.extend({ 
    redirect: function() {
        this.transitionTo('index'); 
    }
});