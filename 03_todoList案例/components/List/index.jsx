import React, { Component } from "react";
import Item from '../Item/index'
import './List.css'
import PropTypes from "prop-types";
export default class List extends Component {
  //对传入的props进行限制
  static propTypes={
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
  }
  render() {
    let {todos,updateTodo,deleteTodo}=this.props;
    // console.log(deleteTodo);
    return (
      <div>
        <ul className="todo-main">
          {todos.map(todo=>{
            return <Item deleteTodo={deleteTodo} updateTodo={updateTodo} {...todo} key={todo.id}></Item>
          })}
        </ul>
      </div>
    );
  }
}
