import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    width: 550,
    backgroundColor: 'red',
  },
})

const AppFrame = (props) => {
  const { children } = props
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default AppFrame