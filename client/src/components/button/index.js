import { Button } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

const ButtonField = (props) => {
  const classes = useStyles()
  const { type, variant, content, onSubmit } = props
  return (
    <div>
      <Button
        type={type}
        fullWidth
        variant={variant}
        onClick={onSubmit}
        color='primary'
        className={classes.submit}>
        {content}
      </Button>
    </div>
  )
}

export default ButtonField
