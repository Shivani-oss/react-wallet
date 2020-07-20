import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined'



const useStyles = makeStyles((theme) => ({ 

    para: {
        color: '#fff',
        margin:15,
        textTransform:"none"
    },
    para1: {
        color: '#cc8e35',
        margin:10,
        fontSize:'1.5rem',
       
    },
    grid: {
        flexGrow: 1,
        marginLeft: 7,
       
    },
    last: {
        ...theme.typography.button,
        backgroundColor: '#000',
        padding: 1,
        margin:15,
        borderRadius: 5,
        maxWidth:1200,
        textTransform:"none",
        opacity: 0.5,
        border: '2px dotted rgba(66,66,66,0.8)'
    },
    last1: {
        ...theme.typography.button,
        backgroundColor: '#000',
        padding: 1,
        margin:20,
        borderRadius: 5,
        maxWidth:1200,
       textTransform:"none",
        opacity: 0.5,
    },
    button: {
        color:"#fff",
        marginTop:8,
        backgroundColor:"#000"
    },
    toggleButton:{
        color:"#fff",
        marginLeft:400,
    },
    icon: {
        marginLeft: 400,
    },

}))

export default function Verification() {
    const classes = useStyles()

    const[Complete, setComplete] = React.useState(false)

    const toggleComplete = () => {
      if(Complete){
        setComplete(false)
      }
      else{
        setComplete(true)
      }
    }
    return (
        <div>
           <div className={classes.last}>
            <div className={classes.grid}>
            <Grid container spacing={6}>
                <Grid  item xs={2}>

                </Grid>
                <Grid item xs={10}  >
                    <Typography className={classes.para1}>{"2547AFHTUEritgnctwwSW"}</Typography>
                   
               </Grid>
            </Grid>
            </div>
        </div>
        <p className={classes.para}>Verify adress on device</p>
        <div className={classes.last1}>
        <div className={classes.grid}>
        <Grid container spacing={6}>
            <Grid item xs={1}>
            <Button
            className={classes.button}
            startIcon={<ArrowRightAltIcon/>}
            ></Button>
            </Grid>
            <Grid item xs={10} onClick={toggleComplete} >
                <Typography className={classes.para}>{"Please match the adress to be shown in X1 Wallet"}</Typography>
                {
                        Complete ?
                            <DoneAllOutlinedIcon className={classes.icon}/>
                            :
                            null
                         
                }
            </Grid>
            
        </Grid>
        </div>
        </div>
    </div>
   
    )
}
