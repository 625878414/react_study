import React, { Component } from "react";
import './Footer.css'
export default class Footer extends Component {
  handleClick=(event)=>{
    let {cancelCompletion}=this.props
    cancelCompletion(event.target.checked)
  }
  clearAllDone=()=>{
    let {handleClearAllDone}=this.props;
    handleClearAllDone()
  }
  render() {
    let {todos}=this.props
    let doneCount=todos.reduce((total,cur,curIndex,arr)=>{
      return cur.done ? total+1 : total+0
    },0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===todos.length && todos.length>0} onChange={this.handleClick}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    );
  }
}
