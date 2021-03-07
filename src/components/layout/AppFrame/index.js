import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppBar } from 'components'
import {createUseStyles} from 'react-jss'

import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  container: {
    width: 350,
    minHeight: 590,
    maxHeight: 620,
    backgroundColor: '#bdc5ce',
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


AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppFrame