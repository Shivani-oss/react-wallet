import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import { Drawer} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#fff',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    drawerPaper: { width: 'inherit', backgroundColor: ' #222222', marginTop:'4%' },
    text: {
        color:'white',
        padding: 10
    },
    icon: {
        height:'100%',
        color:'white',
        background: '#484a4d',
        borderRadius: '15%',
        padding: '5',
        margin: '2',
    },
    button: {
        marginTop: 83,
        padding:10
    },
    last: {
        ...theme.typography.button,
        backgroundColor: '#cc8e35',
        padding: theme.spacing(1),
        marginTop:110,
        color: 'white',
        borderRadius: 4,
        
    },
    border:{
        backgroundColor:'#b29c5b',
        
    },
    textcolor: {
        color:'#cc8e35',
        padding:1,
        textTransform:"none",
        margin:1
    }
   

  }));

  
  
  
export default function SideNavBar() {
    const classes = useStyles();
    
    return (
        <Router >
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '250px', padding:"20dp"}}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
           >
         <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      classes={{paper: classes.icon}}
    >
      <ListItem button>
        <ListItemIcon>
          <LaunchOutlinedIcon className={classes.icon}/>
        </ListItemIcon>
        <ListItemText primary="Portfolio" className={classes.text}/>
      </ListItem>
      <Divider className={classes.border}/>
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceWalletOutlinedIcon className={classes.icon}  />
        </ListItemIcon>
        <ListItemText primary="Wallets" className={classes.text} />
         </ListItem>
         <Button
        className={classes.textcolor}>Wallet1 ...</Button>
        <ListItemText primary="" className={classes.textcolor} />
        <Button
        className={classes.textcolor}>Wallet2 ...</Button>
      <Divider className={classes.border} />
      <ListItem button>
        <ListItemIcon>
          <LoopOutlinedIcon  className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Last Transaction" className={classes.text} />
      </ListItem>
      <Divider className={classes.border} />
      <ListItem button>
        <ListItemIcon>
          <LiveTvOutlinedIcon  className={classes.icon}  />
        </ListItemIcon>
        <ListItemText primary="Tutorial" className={classes.text} />
      </ListItem>
      <Divider className={classes.border}/>
      <ListItem button>
        <ListItemIcon>
          <SettingsOutlinedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Settings" className={classes.text}/>
      </ListItem>
      <Button variant="outlined" color="primary" className={classes.button}>
        Make Beneficiary
    </Button>
   <div className={classes.last}>{"Support"}</div>
}
        </List>
        </Drawer>
    </div>
    </Router>
    )
}


