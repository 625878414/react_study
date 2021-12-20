import React,{Component} from 'react'

//模块化引入css 解决样式冲突
import index from './index.module.css'
export default class Welcome extends Component{
  render(){
    return <div>
      <h1 className={index.hello}>Welcome</h1>
    </div>
  }
}