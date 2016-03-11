Todo = React.createClass({
  getDefaultProps(){
    return {
      complete: function(){},
      remove: function(){}
    }
  },

  _complete(e){
    e.preventDefault()
    this.props.complete(this.props.todo)
  },

  _remove(e){
    e.preventDefault()
    this.props.remove(this.props.todo)
  },

  _getTitleStyle(){
    return Object.assign({}, this._style.title, {
      textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
      color: (this.props.todo.completed) ? 'green' : 'black'
    })
  },

  _getContainerStyle(){
    return Object.assign({}, this._style.container, {
      backgroundColor: (this.props.todo.completed) ? '#dcedc8' : '#fff'
    })
  },

  _toUnDoIcon(){
    return (this.props.todo.completed)
      ? 'replay'
      : 'done'
  },

  _toUnDoButtonClasses(){
    const {completed} = this.props.todo
    return classNames({
      "green": !completed,
      "orange" : completed
    }, "btn-floating btn-large waves-effect waves-light")
  },

  _style: {
    container: {
      display: 'block',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      fontSize: '1.5em',
      width: '100%'
    },
    title: {
      display: 'inline-block',
      fontSize: '1em',
      width: '80%'
    },
    action: {
      display: 'inline-block',
      textAlign: 'center',
      width: '9%'
    }
  },

  render(){
    const {title} = this.props.todo
    return (
      <div style={this._getContainerStyle()}>
        <div style={this._getTitleStyle()}>{title}</div>
        <div style={this._style.action}>
          <a href='#' className={this._toUnDoButtonClasses()} onClick={this._complete}><i className="material-icons">{this._toUnDoIcon()}</i></a>
        </div>
        <div style={this._style.action}>
          <a href='#' className="btn-floating btn-large waves-effect waves-light red" onClick={this._remove}><i className="material-icons">delete</i></a>
        </div>
      </div>
    )
  }
})