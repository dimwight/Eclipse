function id(thing){
  return thing.title||(false?thing:JSON.stringify(thing));
}

facets = {
  title : 'facets',
  build(app) {
    if(!app)throw new Error('No app in '+ id(this));
    var targets=app.getTargets();
    var targeters=[targets.length]
    if(!targets)throw new Error('No targets in '+ id(this))
    else app.attachFacets(targets);
  }
}

Target=function (title){
  this.title=title;
  this.update=function(){
    console.log('Updating in '+id(this))
  }
}

app={
  title:'app',
  getTargets() {
    return [
      new Target('First'),
      new Target('Second')
    ]
  },
  attachFacets(targets) {
    targets.forEach((t)=>t.update())      
  }
}

facets.build(app);