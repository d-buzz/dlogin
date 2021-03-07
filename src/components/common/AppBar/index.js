import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import PublicIcon from '@material-ui/icons/Public'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  title: {
    flexGrow: 1,
  },
  input: {
    width: 100,
    paddingRight: 10,
  },
  inputRoot: {
    border: '1px solid white !important', 
    borderRadius: '25px !important',
  },
})

const appBarBg = { backgroundColor: '#dc3545' }

const AppBar = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <MuiAppBar style={appBarBg} elevation={0} position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="subtitle2" className={classes.title}>
            <b>DLOGIN</b>
          </Typography>
          <Chip
            icon={<PublicIcon />}
            label="https://api.deathwing..."
            clickable
            color="secondary"
            variant="outlined"
            style={{ marginRight: 10, color: 'white', borderColor: 'white' }}
          />
          <Avatar alt="Coffeebender" src="https://images.hive.blog/u/coffeebender/avatar/small" />
        </Toolbar>
      </MuiAppBar>
    </React.Fragment>
  )
}


export default AppBar
