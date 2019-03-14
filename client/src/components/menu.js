import React, { Component } from 'react';
//** IMPORTED STYLE **// 
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import {NavLink} from 'react-router-dom';


class Menu extends Component {
    render(){
        return (
            <div>
                <NavLink to="/" activeClassName="is-active" className="btn btn-primary text-light navbar-item">หน้าแรก</NavLink>
                <NavLink to="/listjob" activeClassName="is-active" className="btn btn-primary text-light navbar-item">รายการงาน</NavLink>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        บัญชี
                    </button>
                    <div className="dropdown-menu">
                        <NavLink to="/payment" activeClassName="is-active" className="dropdown-item navbar-item">รายรับ รายจ่าย</NavLink>
                        <NavLink to="/listpayment" activeClassName="is-active" className="dropdown-item navbar-item">ส่งบิล</NavLink>
                        <NavLink to="/salary" activeClassName="is-active" className="dropdown-item navbar-item">รายได้พนักงาน</NavLink>
                        <NavLink to="/listcash_customer" activeClassName="is-active" className="dropdown-item navbar-item">รายการชำระเงินลูกค้า</NavLink>
                    </div>       
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        เอกสาร
                    </button>
                    <div className="dropdown-menu">
                        <NavLink to="/detail_account" activeClassName="is-active" className="dropdown-item navbar-item">รายละเอียดบัญชี</NavLink>
                        <NavLink to="/invoice" activeClassName="is-active" className="dropdown-item navbar-item">ใบแจ้งหนี้</NavLink>
                        <NavLink to="/bill" activeClassName="is-active" className="dropdown-item navbar-item">ใบเสร็จ</NavLink>
                        <NavLink to="/commission" activeClassName="is-active" className="dropdown-item navbar-item">ใบว่าจ้าง</NavLink>
                        <NavLink to="/register" activeClassName="is-active" className="dropdown-item navbar-item">ใบสมัครงาน</NavLink>
                    </div>
                </div>
                <NavLink to="/tracking" activeClassName="is-active" className="btn btn-primary text-light navbar-item">ติดตามรถ</NavLink>
            </div>
        );
    }
}

export default Menu;

