import React from 'react'
import Paper from '@material-ui/core/Paper'

import {createUseStyles} from 'react-jss'
import classNames from 'classnames'

const useStyles = createUseStyles({
  paper: {
    backgroundColor: 'white',
    width: '98%',
    margin: '0 auto',
  },
  resource: {
    height: 50,
    marginTop: 10,
  },
  main: {
    height: 300,
    marginTop: 10,
  },
  tokens: {
    minHeight: 100,
    marginTop: 10,
  },
})


const Dashboard = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classNames(classes.resource, classes.paper)} elevation={1}></Paper>
      <Paper className={classNames(classes.main, classes.paper)} elevation={1}></Paper>
      <Paper className={classNames(classes.tokens, classes.paper)} elevation={1}></Paper>
    </React.Fragment>
  )
}

export default Dashboard