import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
    width: 550,
    backgroundColor: 'red',
  },
})

const Popup = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h4>Hello World</h4>
      </div>
    </React.Fragment>
  )
}

export default Popup