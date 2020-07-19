import React from 'react'
import { makeStyles,  withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import { Divider, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import {ReactComponent as BitIcon } from '../icons/bit.svg'
import {ReactComponent as Bit1Icon } from '../icons/bit1.svg'
import {ReactComponent as Bit2Icon } from '../icons/bit2.svg'
import Button from '@material-ui/core/Button'
import LaunchIcon from '@material-ui/icons/Launch'
import TransformIcon from '@material-ui/icons/Transform'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import StepLabel from '@material-ui/core/StepLabel'
import Device from './Device'
import Recieve from './Recive'
import Verification from './Verification'
import ToggleOnIcon from '@material-ui/icons/ToggleOn';





const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(0),
      marginLeft:650
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor:"#000",
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '#000',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
      width: '10%',
      maxWidth: 50,
      color:'#ffeaa7',
      marginLeft:1050,
      padding:20,
      fontSize:'1.2rem',
      textTransform: 'none',

     
    },
    arrow:{
        color:'#cc8e35',
        marginLeft:1000,
    },
    icon:{
        marginTop:5,
        maxWidth:'100%',
        color:'#cc8e35',
        marginRight:20
    },
    margin: {
        margin: theme.spacing(0.8),
        marginLeft:250
      },
    heading: {
        width: '100%',
        maxWidth: 500,
        color:'#cc8e35',
        fontSize:'2rem',
        marginLeft:10
    },
    title: {
        color:'#dfe6e9',
        marginRight:550,
        fontFamily:'Times New Roman',
        marginTop:19,
        fontSize:'1rem',
        padding:5
    },
    border:{
        backgroundColor: "#fff",
        marginLeft:200,
        marginTop:-15
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(1),
        color: '#000',
        backgroundColor:'#fff'
      },
    pay: {
        color:'#FFFACD',
        padding:10,
        margin: theme.spacing(2)
    },
    grid: {
      flexGrow: 1,
      marginLeft: 40
    },
    table: {
      maxWidth:700,
      color: "#000",
      backgroundColor:"#000",
      marginLeft: 250,
    },
    content: {
      color:"#fff",
      opacity:0.5,
    },
    last: {
      ...theme.typography.button,
      backgroundColor: '#222222',
      padding: theme.spacing(1),
      marginTop:-0.9,
      color: 'white',
      borderRadius: 2,
      maxWidth:1200,
      marginLeft:200
    },
    last1: {
      ...theme.typography.button,
      backgroundColor: '#222222',
      padding: theme.spacing(1),
      marginTop:10,
      color: 'white',
      borderRadius: 2,
      maxWidth:1200,
      marginLeft:200
    },
    button: {
      marginTop:1,
      color:"#fff"
    },
    msg: {
      marginTop:7,
    },
    dialogHeading: {
      backgroundColor:"#222222",
      color:"#fff",
      padding:20
    },
    root1: {
      width: '100%',
      color: '#fff',
    },
    button1: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
     padding:10
    },
    close: {
      marginLeft:400,
      color:"#fff"
    },
    point: {
      backgroundColor:"#95a5a6",
      padding: theme.spacing(1),
      color: '#000',
      borderRadius: 2,
      marginLeft:10,
    },
    button2: {
      marginTop:6,
      color:'#f1c40f',
      borderColor:'#95a5a6',
      backgroundColor:"#222222",
      padding:8,
      minWidth:150,
    },
    formControl: {
      margin: theme.spacing(1),
      backgroundColor:"#000",
      marginLeft:1020,
      minWidth:200,
      height:40

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    option: {
      color:"#fff",
      marginTop:37
    },
    para: {
      marginTop:-26,
      color:"#fff",
      marginRight:600
    },
    input: {
      marginLeft:650,
      marginTop:-20,
    },
    icon1: {
      marginTop:-100,
      color:'#cc8e35',
      marginLeft:780
    },
    button4: {
      color:"#fff",
      backgroundColor:"#000",
      margin:20
    },
    dbutton: {
      marginTop: 200
    },
    root3: {
      marginTop:-1,
      color:'#f1c40f',
      marginLeft: 40
    }
   
    

}));

function getSteps() {
  return ['Device', 'Verification', 'Recieve'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Device />
    case 1:
      return <Verification />
    case 2:
      return <Recieve />
    default:
      return 'Unknown step';
  }
}

     

  
   
  

export default function Text() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

    return (
        <>
        <Button
         className={classes.root}
        startIcon={<CheckCircleOutlineIcon />}
        color="secondary">Synchronized</Button>
         <Button
         className={classes.root3}
        startIcon={<ToggleOnIcon />}></Button>
        <FormControl className={classes.margin}>
        <InputLabel className={classes.input}>Search For Your Coin ...</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
        <Button
        variant="outlined"
        className={classes.button2}
        startIcon={<AddIcon fontSize="small"/>}
      >
        Add Coin
      </Button>
      <Button
        variant="outlined"
        className={classes.button2}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
        <Container>

        <Typography className={classes.heading}>
            {"Wallet 1"}
        </Typography>
        <FormControl className={classes.formControl}>
        
        <NativeSelect
          defaultValue={10}
          className={classes.option}
        >
          <option  className={classes.option1} value={10}>Amount High-Low</option>
          <option value={20}>Amount Low-High</option>
          <option value={40}>Arrange A-Z</option>
          <option value={30}>Arrange Z-A</option>
         
        </NativeSelect>
      </FormControl>
      <CompareArrowsIcon className={classes.icon1} />
      <Typography>
      <p className={classes.para}>Total Coins-7 </p>
      </Typography>
      <Divider  className={classes.border}/>
    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.content}>Coin</TableCell>
            <TableCell className={classes.content}>Holding</TableCell>
            <TableCell className={classes.content}>Value</TableCell>
            <TableCell className={classes.content}>Price</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <div className={classes.last}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<BitIcon />}
        >Bitcoin</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
         className={classes.msg}
        startIcon={<TransformIcon />}
        onClick={handleClickOpen}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last1}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<Bit1Icon />}
        >Etherium</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
         className={classes.msg}
         onClick={handleClickOpen}
        startIcon={<TransformIcon />}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last1}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<Bit2Icon />}
        >Binance</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
        className={classes.msg}
        startIcon={<TransformIcon />}
        onClick={handleClickOpen}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last1}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<BitIcon />}
        >Bitcoin</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
         className={classes.msg}
        startIcon={<TransformIcon />}
        onClick={handleClickOpen}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last1}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<Bit1Icon />}
        >Etherium</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
         className={classes.msg}
        startIcon={<TransformIcon />}
        onClick={handleClickOpen}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div className={classes.last1}>
      <div className={classes.grid}>
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Button
        className={classes.button}
        startIcon={<Bit2Icon />}
        >Binance</Button>
        </Grid>
        <Grid item xs={2}>
          <p>BTC 0.0256</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.5268</p>
        </Grid>
        <Grid item xs={2}>
          <p>$0.0526</p>
        </Grid>
        <Grid item xs={4}>
        <Button
         className={classes.msg}
        startIcon={<TransformIcon />}
        onClick={handleClickOpen}
        color="primary">Recieve  |</Button>
       <Button
         className={classes.msg}
        startIcon={<LaunchIcon />}
        color="secondary">Send</Button>
        </Grid>
      </Grid>
    </div>
    </div>
    <div>
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogHeading} id="form-dialog-title">Recieve
        <Button onClick={handleClose}  className={classes.close} color="primary">
            <CloseIcon/>
          </Button>
        </DialogTitle>
        <DialogContent className={classes.dialogHeading} >
        <div className={classes.root1}>
      <Stepper activeStep={activeStep} className={classes.dialogHeading} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Wallet are Verified
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button  disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                className={classes.button4}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </DialogContent>
   </Dialog>
  </div>
  </Container>
        
  </>
    )
}

