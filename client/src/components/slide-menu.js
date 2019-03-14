import React from 'react';

const sideMenu = () => {
    return(
        <div>
            <h1>Rozwijane Menu</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#">Start</a></li>
                    <li><a href="#">O nas</a></li>
                    <li className="drop"><a href="#">Oferta</a>
                        <ul className="dropdown">
                            <li><a href="#">Oferta 01</a></li>
                            <li><a href="#">Oferta 02</a></li>
                            <li><a href="#">Oferta 03</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Aktualności</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>

            <script></script>


        </div>

        /* //   <div className="btn-group-vertical btn-group-toggle" data-toggle="a">
        //         <a href="/home"><h5>หน้าแรก</h5></a>
        //         <a href="/listjob" >รายการงาน</a>
        //         <a href="/account">บัญชี</a>
        //         <a href="/payment">รายรับ รายจ่าย</a>
        //         <a href="/listpayment">ส่งรายการค่าใช้จ่าย</a>
        //         <a href="/seraly">รายได้พนักงาน</a>
        //         <a href="/listcash_customer">รายการชำระเงินลูกค้า</a>
        //         <a href="/document"> เอกสาร</a>
        //         <a href="/detail_account">รายละเอียดบัญชี</a>
        //         <a href="/invoice">ใบแจ้งหนี้</a>
        //         <a href="/bill">ใบเสร็จ</a>
        //         <a href="/commission">ใบว่าจ้าง</a>
        //         <a href="/register">ใบสมัครงาน</a> */
 
            /* <ul > <a href="/home"><h5>หน้าแรก</h5></a>
                <ul> <a href="/listjob">รายการงาน</a></ul>
                <ul> <a href="/account">บัญชี</a>
                    <ul><a href="/payment">รายรับ รายจ่าย</a></ul>
                    <ul><a href="/listpayment">ส่งรายการค่าใช้จ่าย</a></ul>
                    <ul><a href="/seraly">รายได้พนักงาน</a></ul>
                    <ul><a href="/listcash_customer">รายการชำระเงินลูกค้า</a></ul>

                </ul>
                <ul> <a href="/document"> เอกสาร</a>
                    <ul><a href="/detail_account">รายละเอียดบัญชี</a></ul>
                    <ul><a href="/invoice">ใบแจ้งหนี้</a></ul>
                    <ul><a href="/bill">ใบเสร็จ</a></ul>
                    <ul><a href="/commission">ใบว่าจ้าง</a></ul>
                    <ul><a href="/register">ใบสมัครงาน</a></ul>
                </ul> 
            </ul>
            */



            // </div> 
    )
}
export default sideMenu;