import React from 'react';


const FormFields = (props) => {

    const renderFields = () => {
        const formArray = [];

        for(let elemnentName in props.formData){
            formArray.push({
                id: elemnentName,
                setting: props.formData[elemnentName]
            })
        }

        console.log(formArray)
    }

    return(
        <div>
            {renderFields()}
        </div>
    )
}

export default FormFields;