import { TextField } from '@material-ui/core'
import React from 'react'

const InputTextField = (props) => {
  const {name,label,value,onChange,type} = props
  return (
    <div>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        type={type}
        value={value}
        onChange={onChange}
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        autoFocus
      />
    </div>
  )
}

export default InputTextField
