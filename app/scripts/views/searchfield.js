EmberApp.SearchField = Ember.TextField.extend({
	didInsertElement: function() {
        this.$().focus();
    },
    insertNewline: function(){
        // preventing default behaviour for "enter"
    },
	keyUp: function(){
        this.sendAction();
    }
});