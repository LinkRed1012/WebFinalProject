import React,{ useState } from 'react';
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
import {Link } from "react-router-dom";
import axios from 'axios'

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

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [personal_login, setPersonal_login ] = useState("1");
  const bye = (e) =>{
  console.log(personal_login)
  let formData = new FormData()
  formData.append("personal_login",personal_login)
  
  const url = "http://100.25.157.222/account_data/api/post/logout_post.php";
  axios.post(url,formData)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err)) ;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            排球影片
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
            <ListItem button key={text} onClick={bye}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Link>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          各個位置的世界級球星
        </Typography>
            大砲:日本-石川祐希
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/ryK33a6Ym7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Typography/>
            波蘭-Wilfredo Leon
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/S1i4ZUwOrb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            攔中:俄羅斯-Ivan Iakovlev
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/2wWzuKDNnjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            舉球:巴西-Bruno Resende
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/EmjsH1Hs5O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            長庚資工舉球第一人-吳紹齊，  詳情請見影片7:00
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/IScIiu6T6ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            舉對:義大利-Ivan zaytsev
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/kFlZ7u8i5LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            日本-西田有志
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/iijvUf5xkkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography/>
            自由:法國-Jenia Grebennikov
            <Typography/>
            <iframe width="400" height="225" src="https://www.youtube.com/embed/pOAxvRS-wPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
      </main>
    </div>
  );
}