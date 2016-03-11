Meteor.methods({
  'insert': function(doc){
    check(doc, Object)
    return Todos.insert(doc)
  },

  'update': function(opts){
    check(opts, Object)
    const {query, setAttrs, options} = opts
    return Todos.update(query, setAttrs, options)
  },

  'remove': function(doc){
    check(doc, Object)
    return Todos.remove(doc)
  }
})