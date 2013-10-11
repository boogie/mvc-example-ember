EmberApp.IndexController = Ember.Controller.extend({
    init: function(){
        this._super();
        this.tick();
    },
    tick: function(){
        var _this = this;
        this.set('date', new Date());
        setTimeout(function(){_this.tick();}, 1000);
    }
});
