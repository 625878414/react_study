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
  render() {
    let {todos}=this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}></Header>
            <List todos={todos}></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
