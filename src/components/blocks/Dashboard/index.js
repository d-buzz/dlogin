import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { HiveIcon } from 'components'

import {createUseStyles} from 'react-jss'
import classNames from 'classnames'

const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
  },
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
    height: 350,
    marginTop: 10,
  },
  tokens: {
    minHeight: 100,
    marginTop: 10,
  },
  gridText: {
    paddingLeft: 10,
  },
  hiveIcon: {
    marginTop: 20,
  },
})


const Dashboard = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classNames(classes.resource, classes.paper)} elevation={1}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid xs={6} item>
                <Typography variant="body" className={classes.gridText}>Voting Power</Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography variant="body" className={classes.gridText}>Resource Credits</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classNames(classes.main, classes.paper)} elevation={1}>
        <center><HiveIcon className={classes.hiveIcon} height={35} /></center>
      </Paper>
      <Paper className={classNames(classes.tokens, classes.paper)} elevation={1}></Paper>
    </React.Fragment>
  )
}

export default Dashboard