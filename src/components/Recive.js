import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({ 

    para: {
        color: '#fff',
        margin:10,
    },
    para1: {
        color: '#cc8e35',
        margin:10,
        fontSize:'1.5rem',
    },
    grid: {
        flexGrow: 1,
        marginLeft: 8
    },
    last: {
        ...theme.typography.button,
        backgroundColor: '#000',
        padding: 1,
        margin:10,
        borderRadius: 5,
        maxWidth:1200,
       textTransform:"none",
        opacity: 0.5
    },
    button: {
        color:"#fff",
        marginTop:8,
        backgroundColor:"#222222"
    },
    button1: {
        textTransform:'none'
    },
    button2: {
        marginLeft:190,
        textTransform:"none",
        minWidth:150,
        marginTop:10
        
    }

}))

export default function Recive() {
    const classes = useStyles();
    return (
        <>
        <p className={classes.para} >Coin Adress</p>
        <div className={classes.last}>
            <div className={classes.grid}>
            <Grid container spacing={6}>
                <Grid item xs={9}>
                    <Typography className={classes.para1}>{"2547AFHTUEritgnctwwSW"}</Typography>
                </Grid>
                <Grid item xs={3}>
                <Button
                className={classes.button}
                >Copy</Button>
                </Grid>
            </Grid>
            </div>
        </div>
        <Button startIcon={<HelpOutlineIcon/>} className={classes.button1} color="primary">adress Verified</Button>
        <p><Button  className={classes.button2} variant="outlined" color="primary">Re-verify</Button></p>
      
        </>

    )
}
