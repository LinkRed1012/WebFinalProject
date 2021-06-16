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
            排球介紹
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
          你打什麼位置?
        </Typography>
            大砲:
            攻擊手又稱為大砲，良好的處理球能力以及穩定的輸出是整隊的主要得分手。
            除了攻擊是全隊最強、最穩定之外，攻擊手的接球能力應該也是球隊中數一數二的，同時，攻擊手的
            心理素質要很好，因為舉球只要把球舉起來還在界內，剩下的都是攻擊手的事，今天不管
            球太開、太貼、太高、太低等等各種情況，攻擊手都要想辦法把球送到對面去，因此處理球的能力要在一定的水準以上。
        <Typography>
            攔中:
            欄中通常是全隊長得最高的人，負責攔對方的攻擊以及跟舉球配合快攻。
            攔中真的是全隊數一數二累的位置之一，除了作為球場中間的攻擊手之外，也要
            負責快攻，而且幾乎每次對面的攻擊都要跳起來攔網，真的就是一直跳呀跳，十分消耗體力。
        </Typography>
        <Typography>
            舉球:
            舉球員是球隊的大腦。對於傳接球處理能力非常要求，移動速度要快，也是唯一一個
            在每場比賽來回中都一定會碰到球的打擊位置。舉球員要做的不僅是把球舉高高而已，對於
            每個攻擊手他們的喜好、習慣打什麼高度、貼度的球都要記得，還要參考比賽當天
            每個球員心理素質及狀況，以及這次對手的強度來調整給球的頻率，要給攻擊、攔中、輔舉、還是自己來? 
            自己來要吊球還是攻擊? 最重要的是，知道每個人在哪，這裡指的「每個人」是包含隊手在內的11個人! 
            總而言之，擔任舉球真的是個既耗體力又耗腦細胞的位置。有些球隊只有一位舉球員要全場跑
            這種狀況我們稱做——「單舉」，不過若是有兩位舉球員的話，另一位便稱為輔舉，有人幫忙舉球，舉球員就比較不會這麼累。
        </Typography>
        <Typography>
            舉對:
            可以舉球也可以攻擊的位置。通常對手都會盡力把第一球送到舉球那邊，破壞隊伍的戰術
            這時當舉球無法接第二顆球時，舉對的作用就來了! 不過舉對除了當舉球的備胎外，也能在舉球背後擔任
            攻擊手，大部分的攔網都會攔攻擊手及攔中，如果輔舉跟舉球的默契超好，攻擊力也不差，那對整隊的得分也是超級加分!
        </Typography>
        <Typography>
            自由:
            自由是全隊移動速度飛快接球也最穩定的守備員。自由的限制很多，像是球衣顏色要跟全隊不同
            也不能發球或有攻擊的行為，擔任自由球員最重要的就是防守，除了要接對面砲火猛烈的攻擊
            也要隨時注意隊友接球有沒有接好、攔中有沒有碰到對方攻擊手攻擊的球，球隊的各種空隙都是自由的防守位置，有些球隊
            甚至直接讓自由球員接對面的每顆發球。
        </Typography>
        <Typography paragraph>
<Typography paragraph>
          你打什麼位置?
        </Typography>
            大砲:
            攻擊手又稱為大砲，良好的處理球能力以及穩定的輸出是整隊的主要得分手。
            除了攻擊是全隊最強、最穩定之外，攻擊手的接球能力應該也是球隊中數一數二的，同時，攻擊手的
            心理素質要很好，因為舉球只要把球舉起來還在界內，剩下的都是攻擊手的事，今天不管
            球太開、太貼、太高、太低等等各種情況，攻擊手都要想辦法把球送到對面去，因此處理球的能力要在一定的水準以上。
            攔中:
            欄中通常是全隊長得最高的人，負責攔對方的攻擊以及跟舉球配合快攻。
            攔中真的是全隊數一數二累的位置之一，除了作為球場中間的攻擊手之外，也要
            負責快攻，而且幾乎每次對面的攻擊都要跳起來攔網，真的就是一直跳呀跳，十分消耗體力。
        <Typography/>
            舉球:
            舉球員是球隊的大腦。對於傳接球處理能力非常要求，移動速度要快，也是唯一一個
            在每場比賽來回中都一定會碰到球的打擊位置。舉球員要做的不僅是把球舉高高而已，對於
            每個攻擊手他們的喜好、習慣打什麼高度、貼度的球都要記得，還要參考比賽當天
            每個球員心理素質及狀況，以及這次對手的強度來調整給球的頻率，要給攻擊、攔中、輔舉、還是自己來? 
            自己來要吊球還是攻擊? 最重要的是，知道每個人在哪，這裡指的「每個人」是包含隊手在內的11個人! 
            總而言之，擔任舉球真的是個既耗體力又耗腦細胞的位置。有些球隊只有一位舉球員要全場跑
            這種狀況我們稱做——「單舉」，不過若是有兩位舉球員的話，另一位便稱為輔舉，有人幫忙舉球，舉球員就比較不會這麼累。
        <Typography/>
            舉對:
            可以舉球也可以攻擊的位置。通常對手都會盡力把第一球送到舉球那邊，破壞隊伍的戰術
            這時當舉球無法接第二顆球時，舉對的作用就來了! 不過舉對除了當舉球的備胎外，也能在舉球背後擔任
            攻擊手，大部分的攔網都會攔攻擊手及攔中，如果輔舉跟舉球的默契超好，攻擊力也不差，那對整隊的得分也是超級加分!
        <Typography/>
            自由:
            自由是全隊移動速度飛快接球也最穩定的守備員。自由的限制很多，像是球衣顏色要跟全隊不同
            也不能發球或有攻擊的行為，擔任自由球員最重要的就是防守，除了要接對面砲火猛烈的攻擊
            也要隨時注意隊友接球有沒有接好、攔中有沒有碰到對方攻擊手攻擊的球，球隊的各種空隙都是自由的防守位置，有些球隊
            甚至直接讓自由球員接對面的每顆發球。
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </main>
    </div>
  );
}