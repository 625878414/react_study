import React, { Component } from "react";
import './Item.css'
export default class Item extends Component {
  state={mouse:false}
  mouseEnter=(flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
      // console.log(this.state.mouse);
    }
  }
  mouseLeave=(flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
      // console.log(this.state.mouse);
    }
  }
  handleChange=(id)=>{
    let {updateTodo}=this.props;
    return (event)=>{
      // console.log(id,event);
      updateTodo(id,event.target.checked)
    }
  }
  handleDelete=(id)=>{
    if(window.confirm("确认删除吗?")){
      let {deleteTodo}=this.props
    deleteTodo(id)
    }
  }
  render() {
    let {name,done,id}=this.props
    return (
      <div>
        <li style={{backgroundColor: this.state.mouse ? "#0aa1ed" :"#fff"}} onMouseEnter={this.mouseEnter(true)} onMouseLeave={this.mouseLeave(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={ {display: this.state.mouse ? "block" :"none" }}>
            删除
          </button>
        </li>
      </div>
    );
  }
}
