import React, { Component } from "react";
import Item from '../Item/index'
import './List.css'
export default class List extends Component {
  render() {
    let {todos}=this.props
    return (
      <div>
        <ul className="todo-main">
          {todos.map(todo=>{
            return <Item {...todo} key={todo.id}></Item>
          })}
        </ul>
      </div>
    );
  }
}
