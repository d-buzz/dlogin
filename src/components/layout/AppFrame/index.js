import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBar } from 'components'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    width: 380,
    minHeight: 550,
    maxHeight: 600,
    backgroundColor: 'whitesmoke',
    overFlow: 'scrollY',
  },
})

const AppFrame = (props) => {
  const { children } = props
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar />
      {children}
    </div>
  )
}

export default AppFrame