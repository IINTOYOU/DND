import React from 'react'
// import { Redirect } from 'react-router';
import hello from './index.module.css'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
   
    
    handleClick = ()=>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className={hello.one}>
                <h3>点击下方按钮进入程序</h3>
                
                <button className={hello.btn} onClick={this.handleClick}>Start App</button>
                
            </div>
            
        );
    }
}

export default Home;
