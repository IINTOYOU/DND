import React, { Component } from 'react'
import learning from './index.module.css'
export default class index extends Component {
    render() {
        return (
            <div className={learning.learn}>
                <span className={learning.sp}>正在学习</span>
                <div className={learning.main}></div>
            </div>
        )
    }
}
