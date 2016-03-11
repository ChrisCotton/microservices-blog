Todos = new Mongo.Collection('stream/todos')
Todos._insert = (doc)=>{
  return new Promise((resolve, reject)=>{
    Meteor.call('todos/insert', doc, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? resolve(response) : reject(err)
    })
  })
}
Todos._update = (query, setAttrs, options)=>{
  return new Promise((resolve, reject)=>{
    Meteor.call('todos/update', {query, setAttrs, options}, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? resolve(response) : reject(err)
    })
  })
}
Todos._remove = (doc)=>{
  return new Promise((resolve, reject)=>{
    Meteor.call('todos/remove', doc, (err, response)=>{
      _.isNull(err) || _.isUndefined(err) ? resolve(response) : reject(err)
    })
  })
}