import React, { Component } from 'react'
import complete from './index.module.css'
export default class index extends Component {
    render() {
        return (
            <div className={complete.comp}>
                <span className={complete.sp}>已经完成</span>
                <div className={complete.main}></div>
            </div>
        )
    }
}
