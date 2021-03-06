import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import BatteryFullIcon from '@material-ui/icons/BatteryFull'
import HowToVoteIcon from '@material-ui/icons/HowToVote'

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
    height: 55,
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

const resourceIcons = { fontSize: 15 }


const Dashboard = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper className={classNames(classes.resource, classes.paper)} elevation={1}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid xs={6} item>
                <Typography variant="body" className={classes.gridText}>
                   <HowToVoteIcon style={resourceIcons} fontSize="small" /> Voting Power
                </Typography> <br />
                <Typography variant="subtitle2" className={classes.gridText}>
                  <b>25.70 %</b>
                </Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography variant="body" className={classes.gridText}>
                  <BatteryFullIcon style={resourceIcons} fontSize="small"  />  Resource Credits
                </Typography> <br />
                <Typography variant="subtitle2" className={classes.gridText}><b>100 %</b></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classNames(classes.main, classes.paper)} elevation={1}>
        <center>
          <HiveIcon className={classes.hiveIcon} height={30} />
          <Typography variant="h5">400 HIVE</Typography>
          <Typography variant="subtitle1">≈ 132 USD</Typography>
          <Typography variant="subtitle2"><b>@ Coffeebender</b></Typography>
        </center>
      </Paper>
      <Paper className={classNames(classes.tokens, classes.paper)} elevation={1}></Paper>
    </React.Fragment>
  )
}

export default Dashboard