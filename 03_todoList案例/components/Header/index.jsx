import React, { Component } from "react";
import './Header.css'
import  {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
export default class Header extends Component {
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  addTodo=(event)=>{
    if(event.keyCode===13){
      // console.log(event.target.value);
      let {addTodo}=this.props;
      if(event.target.value.trim()===""){
        alert('输入不能为空')
        return
      }
      addTodo({
        id:nanoid(),
        name:event.target.value,
        done:false
      });
      event.target.value=""
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.addTodo}/>
      </div>
    );
  }
}
