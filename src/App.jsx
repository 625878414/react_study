import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentInfo=() => {
    axios.get("http://localhost:3000/api/students").then(res=>{
      console.log(res.data);
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}>获取学生数据</button>
      </div>
    )
  }
}
