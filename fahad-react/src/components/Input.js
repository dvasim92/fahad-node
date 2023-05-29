import React from 'react'
import { FormGroup, Label, Input as Inpu } from 'reactstrap'

function Input({ setFormData, data }) {

    const fieldName = Object.keys(data);

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {
                fieldName.map((datas, index, array) => {
                    return <FormGroup key={index}>
                        <Label>Enter {datas} </Label>
                        <Inpu type='text'  name={datas} onChange={e => handleChange(e)} className='shadow-none' />
                    </FormGroup>

                })
            }
        </>
    )
}

export default Input