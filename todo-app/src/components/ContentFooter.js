import React, { useContext } from 'react'
import TodoContext from './Context/TodoContext'

function ContentFooter() {
    const {todos, activeFilter, setActiveFilter} = useContext(TodoContext);

    const todoLeft = todos.filter((todo) => !todo.completed);
  return (
    <footer hidden={todos.length === 0} className="footer">
        <meta property='todoLeft' content={todoLeft.length}></meta>
        <span className='todo-count'>
            <strong mv-value="todoLeft">{todoLeft.length}</strong>
            {todoLeft.length === 1 ? "item" : "items"} left
        </span>
    </footer>
    )
}

export default ContentFooter