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
    return (event)=>{
      
      console.log(id,event);
    }
  }
  render() {
    let {name,done,id}=this.props
    return (
      <div>
        <li style={{backgroundColor: this.state.mouse ? "#0aa1ed" :"#fff"}} onMouseEnter={this.mouseEnter(true)} onMouseLeave={this.mouseLeave(false)}>
          <label>
            <input type="checkbox" defaultChecked={done} onChange={this.handleChange(id)}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={ {display: this.state.mouse ? "block" :"none" }}>
            删除
          </button>
        </li>
      </div>
    );
  }
}
