import React from 'react'

export default React.createClass({
  render() {
    const {
      todos,
      addTodo,
    } = this.props

    return (
      <div>
        <ul>
        {todos.map((todo, i) =>
          <li key={i}>{ todo.text }</li>
        )}
        </ul>

        <button onClick={() => {
          addTodo(this.refs.todo_text.value)
          this.refs.todo_text.value = ''
        }}>ADD</button>
        <input type="text" ref='todo_text'/>
      </div>
    )
  }
})
