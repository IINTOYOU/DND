import React from 'react'
import login from './index.module.css'

import Prepare from '../../component/Prepare'
import Learning from '../../component/Learning'
import Component from '../../component/Complete'

class Login extends React.Component {


    render() {
        return (
            <div className={login.w}>
                <Prepare></Prepare>  
                <Learning></Learning>
                <Component></Component>
            </div>

        );
    }
}

export default Login;
