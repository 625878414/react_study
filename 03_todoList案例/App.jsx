import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
export default class App extends Component {
  state={
    todos:[
      {id:"101",name:"吃饭",done:false},
      {id:"102",name:"睡觉",done:true},
      {id:"103",name:"敲代码",done:false},
    ]
  }
  addTodo=(data)=>{
    console.log(data);
    let {todos}=this.state;
    this.setState({
      todos:[data,...todos]
    });
    console.log(todos);
  }
  updateTodo=(id,done)=>{
    let {todos}=this.state
    let newTodos=todos.map(todoObj=>{
      return todoObj.id===id ? {...todoObj,done} :{...todoObj}
    })
    this.setState({todos:newTodos});
    console.log(todos);
  }
  deleteTodo=(id)=>{
    let {todos}=this.state
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    this.setState({
      todos:newTodos
    })
  }
  cancelCompletion=(done)=>{
    let {todos}=this.state;
    let newTodos=todos.map(todo=>{
      return {...todo,done}
    })
    this.setState({
      todos:newTodos
    })
    console.log(newTodos);
  }
  handleClearAllDone=()=>{
    let {todos}=this.state;
    let newTodos=todos.filter(todo=>{
      return !todo.done
    })
    this.setState({
      todos:newTodos
    })
  }
  render() {
    let {todos}=this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} ></Header>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
            <Footer todos={todos} handleClearAllDone={this.handleClearAllDone} cancelCompletion={this.cancelCompletion}></Footer>
          </div>
        </div>
      </div>
    );
  }
}
