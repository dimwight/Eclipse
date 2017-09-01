function id(thing) {
    return thing.title || (false ? thing : JSON.stringify(thing));
}
var facets = {
    title: 'facets',
    build: function (app) {
        if (!app)
            throw new Error('No app in ' + id(this));
        var targets = app.getTargets();
        var targeters = [targets.length];
        if (!targets)
            throw new Error('No targets in ' + id(this));
        else
            app.attachFacets(targets);
    }
};
var Target = function (title) {
    this.title = title;
    this.update = function () {
        console.log('Updating in ' + id(this));
    };
};
var app = {
    title: 'app',
    getTargets: function () {
        return [
            new Target('First'),
            new Target('Second')
        ];
    },
    attachFacets: function (targets) {
        targets.forEach(function (t) { return t.update(); });
    }
};
facets.build(app);
