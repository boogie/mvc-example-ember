EmberApp.SearchField = Ember.TextField.extend({
	attributeBindings: ['autofocus'],
	keyUp: function(){
        this.sendAction();
    }
});
