import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import inserting from './PHP/inserting';
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:'url(https://youranimes.tw/pic/417_141421.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height : '1000px',
  
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function Sing_up_page() {

const [personal_id, setPersonal_id ] = useState("");
const [personal_account, setPersonal_account ] = useState("");
const [personal_password, setPersonal_password ] = useState("");
const [editMode, setEditMode] = useState(false);



const handleSubmit = (e) =>{
  
  console.log(personal_id);
  console.log(personal_account);
  console.log(personal_password);

  let formData = new FormData()
  formData.append("personal_id",personal_id)
  formData.append("personal_account",personal_account)
  formData.append("personal_password",personal_password)

const url = "http://100.25.157.222/account_data/inserting.php";
axios.post(url,formData)
.then(res=>console.log(res.data))
.catch(err=>console.log(err)) ;
}



  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign up
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              margin="normal"
              required
              fullWidth
              id="personal_id"
              type="personal_id"
              label="name or userid"
              name="personal_id"
              helperText="please enter your name or userid"
              onChange={(id) => setPersonal_id(id.target.value)}
              
              autoFocus
            />
             
            <TextField
              margin="normal"
              required
              fullWidth
              id="personal_account"
              type="personal_account"
              label="account"
              name="personal_account"
              helperText="please enter your account"
              onChange={(account) => setPersonal_account(account.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="personal_password"
              label="Password"
              type="personal_password"
              id="personal_password"
              helperText="please enter your password"
              onChange={(password) => setPersonal_password(password.target.value)}
              
            />
             <Link exact to = "/"> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => setEditMode(!editMode)}
              onClick={handleSubmit}
              className={classes.submit}
            >
            Submit
            </Button>
            </Link> 
            <Box mt={3}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}