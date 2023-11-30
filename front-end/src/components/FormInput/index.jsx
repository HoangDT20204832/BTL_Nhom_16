import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const FormInput = (props) => {
    const {valueInput, setValueInput} = useState('')
    const { placeholder = 'Nhập text', ...rests } = props
    // const handleOnchangeInput = (e) => {
    //     props.onChange(e.target.value)
    // }
    return (
        // <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
        <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rests}/>
    )
}

export default FormInput