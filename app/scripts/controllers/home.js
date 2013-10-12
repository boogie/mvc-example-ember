EmberApp.HomeController = Ember.Controller.extend({
    tick: function(){
        var _this = this;
        this.set('date', new Date());
        setTimeout(function(){_this.tick();}, 1000);
    }.on('init')
});
