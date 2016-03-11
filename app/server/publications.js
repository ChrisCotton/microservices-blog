Meteor.publish('stream/todos', function(){
  const self = this
  this.autorun(()=>{
    Services.Todos.subscribe('todos')
    const handle = Todos.find().observe({
      added(doc){
        self.added('stream/todos', doc._id, doc)
      },
      changed(doc){
        self.changed('stream/todos', doc._id, doc)
      },
      removed(doc){
        self.removed('stream/todos', doc._id)
      }
    })
    self.ready()
    self.onStop(()=>{
      handle.stop()
    })
  })
})