import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname:''
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
    }
    handleLastnameChange = (event) => {
        console.log(event.target.value)
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input type="text" 
                                onChange={this.handleNameChange}
                               value={this.state.name}/>
                        
                    </div>
                </form>

                <form>
                    <div className="form_element">
                        <label>Enter last name</label>
                        <input type="text"
                                 onChange={this.handleLastnameChange}
                                value={this.state.lastname}/>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;