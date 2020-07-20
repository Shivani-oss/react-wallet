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
      marginLeft:400,
    },
    toggleButton:{
        color:"#fff",
        marginLeft:400,
    },
    para2: {
        color:"#cc8e35"
    }

}))

const Device = ({text}) => {
    const classes = useStyles();
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
        <>
      <div className={classes.last}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={1}>
        <Button
        className={classes.button}
        startIcon={<ArrowRightAltIcon/>}
        ></Button>
        </Grid>
        <Grid item xs={11} onClick={toggleComplete} >
            <Typography className={classes.para}>{text}</Typography>
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
    </>
    )
}

export default Device