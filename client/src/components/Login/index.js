import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import InputTextField from '../input/TextField'
import ButtonField from '../button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Login as ActionLogin } from '../../redux/actions'

export default function Login() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) =>
    setData({ ...data, [event.target.name]: event.target.value })
  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(data)
    dispatch(ActionLogin.loginRequest(data))
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
      <ButtonField
        type='submit'
        onSubmit={handleOnSubmit}
        variant='contained'
        content='Login'
      />
      <Grid container>
        <Grid item>
          <Link to='/register'>{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </form>
  )
}
