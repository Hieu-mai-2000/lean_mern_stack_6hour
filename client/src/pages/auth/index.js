import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import useStyles from './style'
import Container from '@material-ui/core/Container'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import Login from '../../components/Login'
import SignUp from '../../components/SignUp'

export default function Auth(props) {
  const { authRoute } = props
  const classes = useStyles()

  const body = (
    <>
      {authRoute === 'login' && <Login />}
      {authRoute === 'register' && <SignUp />}
    </>
  )

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AcUnitIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Let's join
        </Typography>
        {body}
      </div>
    </Container>
  )
}
