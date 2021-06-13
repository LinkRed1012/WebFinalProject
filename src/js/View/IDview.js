import $ from 'jquery';
import {Link } from "react-router-dom"
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ReactDOM from 'react-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const element = <PermanentDrawerLeft  online_name=''
username= ''
githubUrl= ''    
avataUrl= ''
follwers= ''
place='' />;



export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  useEffect(() => {
    $.get(element.source, (result) => {
           console.log(result);
           const data = result;
           if (data){
               this.setState({
                   online_name: data.login,
                   username: data.name,
                   place: data.location,
                   githubUrl: data.html_url,
                   avataUrl: data.avatar_url,
                   followers: data.followers,
               });
           }
      });
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <Link exact to = "/MainPage">
        <List >
          {['籃球介紹'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
        <Link exact to = "/BasketballVideo">
        <List >
          {['籃球影片'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
        <Divider />
        <Link exact to = "/Volleyball">
        <List >
          {['排球介紹'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
        <Link exact to = "/VolleyballVideo">
        <List >
          {['排球影片'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
        <Divider />
        <Link exact to ="/Catch">
        <List>
          {['個人資料'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
        <Link exact to = "/">
        <List >
          {['登出'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <div>
              <p>ID:{element.online_name}</p><Typography/>  
              <h3>{element.username}</h3><Typography/>  
              <img src={element.avataUrl} /><p/><Typography/>  
              <a>location:{element.place}</a><Typography/>  
              <p>followers: {element.followers}</p><Typography/>  
              <a href={element.githubUrl}>Github Link </a>
             <Typography/>  
            <Link exact to = "/MainPage">
                回到首頁
            </Link>
           </div>
       
      </main>
    </div>
  );
}


