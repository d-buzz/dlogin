import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  title: {
    flexGrow: 1,
  },
})



const AppBar = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <MuiAppBar elevation={0} position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="subtitle2" className={classes.title}>
            <b>DLOGIN</b>
          </Typography>
          <Avatar alt="Coffeebender" src="https://images.hive.blog/u/coffeebender/avatar/small" />
        </Toolbar>
      </MuiAppBar>
    </React.Fragment>
  )
}

export default AppBar
