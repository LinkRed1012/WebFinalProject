import React, { useState , useEffect } from 'react';
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
import { ComputerSharp } from '@material-ui/icons';


function Copyright() {
  return (
    <Typography variant="body2" color="red" align="center">
      {'Copyright © '}
      
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
  // const {star} = useFetch();
  const [personal_account, setPersonal_account ] = useState("");
  const [personal_password, setPersonal_password ] = useState("");
  const [personal_login , setPersonal_login] = useState("0");
  const [statement , setStatement] = useState("0");
  const [star , setState] = useState([]) ;
//   useEffect(() =>{
//     const cc = async () =>{
//       const response = await fetch("http://localhost/account_data/api/post/personal.php" );
//       const data = await response.json();
//       const [item] = data;
//       setState(item);
//       console.log(item);
//     }
//       cc();
// },[statement]);

// const zclick = (star) =>{
    
//   console.log(star.personal_login)
//   if (star.personal_login == 1){
//     //window.location.assign("http://localhost:3000/Mainpage");
//     console.log(100)
//   }else{
//     console.log(100000000000)
//     // window.location.assign("http://localhost:3000/Mainpage");
//   }
// }
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(personal_account)
      console.log(personal_password)
      console.log(personal_login)
      let formData = new FormData()
      formData.append("personal_account",personal_account)
      formData.append("personal_password",personal_password)
      formData.append("personal_login",personal_login);
    const url = "http://100.25.157.222/account_data/login.php";
    axios.post(url,formData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err)) ;
    
    if(statement == 1){
      window.location.assign("http://localhost:3000/Mainpage");
    }else{
      setStatement(1);
    }
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField    
                margin="normal"
                required
                fullWidth
                id="personal_account"
                label="personal_account"
                type="personal_account"
                name="personal_account"
                autoFocus
                onChange={(account) => setPersonal_account(account.target.value)}
              
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
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                // onClick={setStatement(1)}
                //  onClick={zclick(star)}
                >
                Sign In
              </Button>
              
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