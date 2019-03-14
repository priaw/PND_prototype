import React, { Component } from 'react';
//import Content from './src/components/contents.js';

//** IMPORTED STYLE **// 
import '../style/side-menu.css';
import '../style/bootstrap.min.css';

class Detailaccount extends Component {
    render(){
        return (
            <div className='row'>
                <div className="container-fluid">  </div> 
                <div className="container-fluid row">
                    <div className="col-md-3 d-none d-md-block bg-light sidebar">  </div>
                    <div className="col-md-8"> 
                    <div className="">รายละเอียดบัญชี</div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Detailaccount;