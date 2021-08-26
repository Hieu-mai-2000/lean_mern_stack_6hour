import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import InputTextField from '../input/TextField'
import ButtonField from '../button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Register as ActionRegister } from '../../redux/actions'

export default function SignUp() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event) =>
    setData({ ...data, [event.target.name]: event.target.value })
  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(data)
    dispatch(ActionRegister.registerRequest(data))
  }

  return (
    <form className={classes.form} noValidate>
      <InputTextField
        name='username'
        value={data.username}
        onChange={handleChange}
        label='Username'
        type='username'
      />
      <InputTextField
        name='password'
        value={data.password}
        onChange={handleChange}
        label='Password'
        type='password'
      />
      <InputTextField
        name='confirmPassword'
        label='Confirm Password'
        value={data.confirmPassword}
        onChange={handleChange}
        type='password'
      />
      <ButtonField
        type='submit'
        onSubmit={handleOnSubmit}
        variant='contained'
        content='Sign Up'
      />
      <Grid container>
        <Grid item>
          <Link to='/login'>{"Don't have an account? Login"}</Link>
        </Grid>
      </Grid>
    </form>
  )
}
