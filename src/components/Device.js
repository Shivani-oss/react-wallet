import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';


const useStyles = makeStyles((theme) => ({ 

    grid: {
        flexGrow: 1,
        marginLeft: 5
    },
    last: {
        ...theme.typography.button,
        backgroundColor: '#000',
        padding: 3,
        margin:10,
        color: 'white',
        borderRadius: 5,
        maxWidth:1200,
       
        textTransform:"none",
        opacity: 0.5
    },
    para: {
        color:"#fff",
        margin:10
    },
    button: {
        marginTop:8,
        color:"#fff",
    },
    icon: {
    },
    toggleButton:{
        color:"#fff",
        marginLeft:400,
    },
    para2: {
        color:"#cc8e35"
    }

}))

export default function Device() {
    const classes = useStyles();


    return (
        <>
      <p className={classes.para}>Follow the instruction on device</p>
      <div className={classes.last}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={1}>
        <Button
        className={classes.button}
        startIcon={<ArrowRightAltIcon/>}
        ></Button>
        </Grid>
        <Grid item xs={11} >
            <Typography className={classes.para}>{"Select the Wallet on device"}</Typography>
        </Grid>
        
        
      </Grid>
    </div>
    </div>
    <div className={classes.last}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={1}>
        <Button
        className={classes.button}
        startIcon={<ArrowRightAltIcon/>}
        ></Button>
        </Grid>
        <Grid item xs={10}>
            <Typography className={classes.para}>{"Select the Coin on device"}</Typography>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={1}>
        <Button
        className={classes.button}
        startIcon={<ArrowRightAltIcon/>}
        ></Button>
        </Grid>
        <Grid item xs={11}>
            <Typography className={classes.para}>{"Tap 1 Card of any 4 card"}</Typography> 
        </Grid>
      </Grid>
    </div>
    </div>
    </>
    )
}
