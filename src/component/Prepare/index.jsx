import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import prepare from './index.module.css'
// import TodoList from '../TodoList'
export default class index extends Component {
   
    constructor(props){
        super(props) 
        this.state={
              arr:[
                    {
                        id:1,
                        object:'学习Javascript'
                    },
                    {
                        id:2,
                        object:'学习VUE'
                    },
                    {
                        id:3,
                        object:'学习React'
                    }
              ],
              needX: 0,
              needY: 0
        }
        this.disX = 0;
        this.disY = 0;
        // this.absolute='';
    }
   
    fnDown(e) {
        this.absolute='absolute'
        this.disX = e.clientX - e.target.offsetLeft;
        this.disY = e.clientY - e.target.offsetTop;
        document.onmousemove = this.fnMove.bind(this)
    }
    fnMove(e) {
        this.setState({
            needX: e.clientX - this.disX,
            needY: e.clientY - this.disY
        })
    }
    fnUp() {
        // 第三步：鼠标放开时document移除onmousemove事件
        document.onmousemove = null
    }

    render(){
        return  (
           
                <div className={prepare.pre}>
                    <span className={prepare.sp}>待做事项</span>
                    <div className={prepare.main}>
                        <ul id="list">

                 

                            {this.state.arr.map(item=>(
                                <li className={prepare.lis} style={{left:this.state.needX,top:this.state.needY,position:this.absolute}}
                                onMouseDown = {this.fnDown.bind(this)}
                                onMouseUp = {this.fnUp.bind(this)}
                key={item.id} onMouseDown={this.handleMousedown}>{item.object}</li>
                            ))}
                        </ul>
                        <button> 增加学习项</button>
                       
                    </div>
                  
                </div>
                )
            }
    } 