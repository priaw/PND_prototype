import React, { Component } from 'react';
import FormFields from './Forms/formFields'; 

class User extends Component {

    state = {
        formData:{
            name:{
                element: 'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    text:'text',
                    placeholder:'Enter you name'
                }
            },

            lastname:{
                element: 'input',
                value:'',
                label:true,
                labelText:'LastName',
                config:{
                    name:'Lastname_input',
                    text:'text',
                    placeholder:'Enter you lastname'
                }
            }
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                
                <FormFields
                    formData={this.state.formData}
                />  

                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default User;