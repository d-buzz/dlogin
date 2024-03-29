import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import BatteryFullIcon from '@material-ui/icons/BatteryFull'
import HowToVoteIcon from '@material-ui/icons/HowToVote'

import SendIcon from '@material-ui/icons/Send'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PublishIcon from '@material-ui/icons/Publish'

import { HiveIcon, Separator } from 'components'

import { createUseStyles } from 'react-jss'
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
    height: 60,
    marginTop: 15,
  },
  main: {
    height: 225,
    marginTop: 10,
  },
  estimate: {
    height: 75,
    marginTop: 10,
  },
  assets: {
    minHeight: 120,
    marginTop: 10,
  },
  gridText: {
    paddingLeft: 10,
  },
  hiveIcon: {
    marginTop: 20,
  },
  verticalSpacing: {
    paddingTop: 5,
  },
  iconButton: {
    backgroundColor: '#1976d2 !important',
  },
  actionIcons: {
    color: 'white',
  },
  assetAmount: {
    fontFamily: "'Roboto Condensed', sans-serif !important",
  },
  votingStat: {
    marginLeft: '17px !important',
  },
  resourceStat: {
    marginLeft: '15px !important',
  },
})

// style compromise
const resourceIcons = { fontSize: 15 }
const roundedButton = { borderRadius: 25 }
const buttonMargin = { marginLeft: 10 }


const Dashboard = () => {

  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)

  return (
    <React.Fragment>
      <Paper className={classNames(classes.resource, classes.paper)} elevation={0}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid xs={6} item>
                <Typography variant="body" className={classes.gridText}>
                   <HowToVoteIcon style={resourceIcons} fontSize="small"/>
                   <b>Voting Power</b>
                </Typography> <br />
                <Typography variant="subtitle2" className={classNames(classes.gridText, classes.votingStat)}>
                  25.70 %
                </Typography>
              </Grid>
              <Grid xs={6} item>  
                <Typography variant="body" className={classes.gridText}>
                  <BatteryFullIcon style={resourceIcons} fontSize="small"/>
                  <b>Resource Credits</b>
                </Typography> <br />
                <Typography variant="subtitle2" className={classNames(classes.gridText, classes.resourceStat)}>
                  100 %
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classNames(classes.main, classes.paper)} elevation={0}>
        <center>
          <HiveIcon className={classes.hiveIcon} height={35} />
          <Typography className={classNames(classes.verticalSpacing, classes.assetAmount)} variant="h4" component="p">
            422.973 HIVE
          </Typography>
          <Typography className={classes.verticalSpacing} variant="subtitle1" component="p">
            $ 120.75 USD
          </Typography>
          <Typography className={classes.verticalSpacing} variant="subtitle2">
            <b>@coffeebender</b>
          </Typography>
          <Separator height={15} />
          <Button 
            style={roundedButton}
            variant="outlined"
            color="secondary"
            startIcon={<SendIcon />}
            size="small"
          >
            Send
          </Button> 
          <Button 
            style={{...roundedButton, ...buttonMargin}}
            variant="outlined"
            color="secondary"
            startIcon={<PublishIcon />}
            size="small"
          >
            Power Up
          </Button>
          <Button 
            style={{...roundedButton, ...buttonMargin}}
            variant="outlined"
            color="secondary"
            startIcon={<ShoppingCartIcon />}
            size="small"
          >
            Buy
          </Button>
        </center>
      </Paper>
      <Paper className={classNames(classes.estimate, classes.paper)} elevation={0}>
        <center>
          <Separator height={5} />
          <Typography variant="subtitle2">
            <b>Estimated Account Value</b>
          </Typography>
          <Separator height={2} />
          <Chip label={(
              <Typography variant="subtitle2">
                $ 127.23 USD
              </Typography>
            )}
            size="small"
            color="secondary"
            variant="outlined"
          />
          <Separator height={2} />
          <Typography variant="body2">
            422.973 HIVE + 400 HP + 3 HBD
          </Typography>
        </center>
      </Paper>
      <Paper className={classNames(classes.assets, classes.paper)} elevation={0}>
        <Tabs
          value={tabValue}
          indicatorColor="secondary"
          textColor="primary"
          centered
        >
          <Tab 
            label={(
              <Typography variant="subtitle2" style={{ color: 'black' }}>
                <b>Assets</b>
              </Typography>
            )} 
          />
          <Tab 
            label={(
              <Typography variant="subtitle2" style={{ color: 'black' }}>
                <b>History</b>
              </Typography>
            )} 
          />
        </Tabs>
        <Separator height={5} />
        <ListItem button>
          <ListItemText primary={(
            <Typography variant="subtitle2" style={{ color: 'black' }}>
              HIVE POWER <br /> <b>430 HP</b>
            </Typography>
          )} />
          <ListItemIcon>
            <NavigateNextIcon edge="start" />
          </ListItemIcon>
        </ListItem>
        <Separator height={10} />
      </Paper>
      <Separator height={5} />
    </React.Fragment>
  )
}


export default Dashboard