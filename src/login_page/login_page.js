import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import links from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom"
import axios from "axios"







function Copyright() {
  return (
    <Typography variant="body2" color="red" align="center">
      {'Copyright © '}
      <links color="inherit" href="https://www.instagram.com/mao_._oo/">
        Sam Mao
      </links>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.biography.com/.image/t_share/MTM5OTQxMzEwNjcxODg5NDQ5/stephen-curry-gettyimages-538912798_verticaljpg.jpg)',
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



export default function Login_page() {

  const [personal_account, setPersonal_account ] = useState("");
  const [personal_password, setPersonal_password ] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = e =>{
     
      console.log(personal_account)
      console.log(personal_password)

      let formData = new FormData()
      formData.append("personal_account",personal_account)
      formData.append("personal_password",personal_password)

    const url = "http://localhost/account_data/login.php";
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
              Welecome to this web ,
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField    
                margin="normal"
                required
                fullWidth
                id="personal_account"
                label="personal_account"
                name="personal_account"
                autoFocus
                onChange={(account) => setPersonal_account(account.target.value)}
              // onClick={() => {
              //   if (!editMode) {
              //     window.location.href = `personal_account:${personal_account}`;
              //   }
              // }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="personal_password"
                label="personal_password"
                type="personal_password"
                id="personal_password"
                onChange={(password) => setPersonal_password(password.target.value)}
                // onClick={() => {
                //   if (!editMode) {
                //     window.location.href = `personal_personal:${personal_password}`;
                //   }
                // }}
              />
              <Link exact to = "/MainPage"> 
              <Button
                type="submit"
                halfWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => setEditMode(!editMode) }
                onClick={handleSubmit}
                >
                Sign In
              </Button>
              </Link> 
              <Link exact to = "/signup" >
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign Up
                </Button>
              </Link>
              <Box mt={3}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  
}