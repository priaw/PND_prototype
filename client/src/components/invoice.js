import React, { Component } from 'react';

//** IMPORTED STYLE **// 
import '../style/side-menu.css';
import '../style/bootstrap.min.css';

class Invoice extends Component {
    render(){
        return (
            <div className='row'>
                <div className="container-fluid">  </div> 
                <div className="container-fluid row">
                    <div className="col-md-3 d-none d-md-block bg-light sidebar">  </div>
                    <div className="col-md-8"> 
                    <div className="">ใบแจ้งหนี้</div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Invoice;