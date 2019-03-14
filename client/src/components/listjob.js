import React, { Component } from 'react';
// import ReactDom from 'react-dom';
//** IMPORTED COMPONENTS **//
import ListjobModal from './modal/listjob-modal';
import AddListjobModal from './modal/AddListjob-modal';

//** IMPORTED STYLE **// 
import '../style/side-menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

class Listjob extends Component {
    constructor(props){
        super (props);
        this.state = { listjobs : [] };

        }
    componentDidMount(){
        fetch('http://localhost:3500/viewListjob')
        .then( (response) => {
            return response.json() })   
        .then( (json) => {
            this.setState({data: json});
        });

    }

    render(){
        return (     
            <div>   
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th className="text-center" scope="col">วันที่</th>
                        <th className="text-center" scope="col">เวลา</th>
                        <th className="text-center" scope="col">พนักงานขับรถ</th>
                        <th className="text-center" scope="col">ชื่อลูกค้า</th>
                        <th className="text-center" scope="col">ชื่อผู้ว่าจ้าง</th>
                        <th className="text-center" scope="col">ต้นทาง</th>
                        <th className="text-center" scope="col">ปลายทาง</th>
                        <th className="text-center" scope="col">ราคา</th>
                        <th className="text-center" scope="col">ชำระ</th>
                        <th className="text-center" scope="col">หมายเหตุ</th>
                        <th className="text-center" scope="col">แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(data => 
                            <tr key = {data.id}>
                                <td>{data.date}</td>
                                {/* <td>{data.time}</td>
                                <td>{data.driver}</td>
                                <td>{data.customer}</td>
                                <td>{data.dealer}</td>
                                <td>{data.source}</td>
                                <td>{data.destination}</td>
                                <td>{data.price}</td>
                                <td>{data.payment}</td>
                                <td>{data.job_description}</td> */}
                                <td>{ListjobModal}</td>
                            </tr>
                            
                        )}
                        
                    </tbody>
                </table>
                <div>
                    <AddListjobModal/>
                </div>
            </div>
        );
    }
}
export default Listjob;