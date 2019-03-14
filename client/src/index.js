import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter} from 'react-router-dom';

//** COMPONENTS **// 
import Header from './components/header'
import Home from './components/home';
import Account from './components/account';
import Payment from './components/payment';
import Listpayment from './components/listpayment';
import Salary from './components/salary';
import Listcashcustomer from './components/listcash_customer';
import Documents from './components/document';
import Detailaccount from './components/detail_account';
import Invoice from './components/invoice';
import Bill from './components/bill';
import Commission from './components/commission';
import Register from './components/register';
import Listjob from './components/listjob';
import tracking from './components/tracking';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <div className="sticky-top"><Header/></div>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/listjob" component={Listjob}/>
                <Route path="/account" component={Account}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/listpayment" component={Listpayment}/>
                <Route path="/salary" component={Salary}/>
                <Route path="/listcash_customer" component={Listcashcustomer}/>
                <Route path="/document" component={Documents}/>
                <Route path="/detail_account" component={Detailaccount}/>
                <Route path="/invoice" component={Invoice}/>                    
                <Route path="/bill" component={Bill}/>
                <Route path="/commission" component={Commission}/>
                <Route path="/register" component={Register}/>
                <Route path="/tracking" component={tracking}/>
            </div>    
        </div>
    </BrowserRouter>,document.getElementById('root')
)