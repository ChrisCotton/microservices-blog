const Future = Npm.require('fibers/future')

Meteor.methods({
  'todos/insert': function(doc){
    check(doc, Object)

    const future = new Future()
    Services.Todos.call('insert', doc, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? future.return(response) : future.throw(err)
    })
    return future.wait()
  },

  'todos/update': function(opts){
    check(opts, Object)

    const future = new Future()
    Services.Todos.call('update', opts, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? future.return(response) : future.throw(err)
    })
    return future.wait()
  },

  'todos/remove': function(doc){
    check(doc, Object)

    const future = new Future()
    Services.Todos.call('remove', doc, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? future.return(response) : future.throw(err)
    })
    return future.wait()
  }
})