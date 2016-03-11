App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    const sub = Meteor.subscribe('stream/todos')

    return {
      ready: sub.ready(),
      Todos: Todos.find().fetch()
    }
  },

  _add(e){
    e.preventDefault()
    const field = document.getElementById('title')

    const todo = {
      title: field.value,
      completed: false
    }
    Todos._insert(todo)
      .then((result)=>{
        console.log(result)
        field.value = ''
      })
      .catch((err)=>{
        console.error(err)
      })
  },

  _complete(todo){
    Todos._update({_id: todo._id}, {$set: {completed: !todo.completed}})
      .then((result)=>{
        console.log(result)
      })
      .catch((err)=>{
        console.error(err)
      })
  },

  _remove(todo){
    Todos._remove(todo)
      .then((result)=>{
        console.log(result)
      })
      .catch((err)=>{
        console.error(err)
      })
  },

  render(){
    console.log("todos:", this.data.Todos)

    return (
      <div>
        <div className="row">
          <div className="col s6">
            <form>
              <div className="input-field col s12">
                <input id="title" type="text" className="validate" />
                <label htmlFor="title">enter a todo</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" onClick={this._add}>Submit</button>
            </form>
          </div>
          <div className="col s6">
            {this.data.Todos.map((todo, key)=>{
              return (
                <Todo
                  key={key}
                  todo={todo}
                  complete={this._complete}
                  remove={this._remove} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
})