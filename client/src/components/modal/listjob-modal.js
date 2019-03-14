import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap';

//** IMPORTED STYLE **// 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import DatePicker from './datepicker';

class Modal extends Component {
    render(){
        return (
            <div>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                    <FontAwesomeIcon icon={faWrench}/>
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">แก้ไขรายการงาน</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group-append">
                            <DatePicker/>
                            <div className="input-group col-md-5">
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>พนักงาน...</option>
                                    <option value="1">ประหยัด</option>
                                    <option value="2">ธงชัย</option>
                                    <option value="3">อรุณ</option>
                                    <option value="4">ลำใย</option>
                                    <option value="5">สถาพร</option>
                                    <option value="6">สถาพร</option>
                                    <option value="7">นิคม</option>
                                </select>
                            </div>
                    </div>
                    <br/>

                        <input type="text" className="form-control" placeholder="ต้นทาง" aria-label="" aria-describedby="basic-addon1" name='S'/> <br/>
                        <input type="text" className="form-control" placeholder="ปลายทาง" aria-label="" aria-describedby="basic-addon1"/> <br/>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <select className="custom-select" id="inputGroupSelect01">
                                <option value="1">เงินสด</option>
                                <option value="2">เงินโอน</option>
                            </select>
                            </div>
                                <input type="text" className="form-control" placeholder="ราคา" aria-label="" aria-describedby="basic-addon1"/>
                                <div className="input-group-append"><span className="input-group-text">บาท</span></div>
                        </div>
                        <br/>

                        <input type="text" className="form-control" placeholder="หมายเหตุ" aria-label="" aria-describedby="basic-addon1"/> <br/>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">รีเซ็ท</button>
                        <button type="button" className="btn btn-primary">บันทึก</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Modal;