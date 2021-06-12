import React from 'react';
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
import {Link } from "react-router-dom"

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            籃球介紹
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
        <Typography paragraph>
        籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看的球類活動之一[1]，從1936年起就是奧運會的正式競賽項目之一[2]。在三分線內投進可得兩分，若在三分線外投籃，可以得到三分。在比賽結束時，得分最多的球隊獲勝，但若二隊平手，會進行延長賽。在球賽中，控球者可以用持續運球（將球彈到地上，再反彈到自己手中）的方式行進或奔跑，也可以將球傳給其他隊員，但若走步（掌控球者沒有運球，且移動超過指定範圍或指定方式）、翻球或二次運球均是違例。
        <Typography/>
        違例是違反籃球比賽的遊戲規則，罰則為失去控球權並由對方發界外球。犯規則分為一般性的犯規（如有身體接觸而侵犯他人等）與技術性犯規（如粗言穢語、不服判決、延誤比賽等非體育道德行為等），若個人於單場比賽中累計犯規超過一定次數，將被判下場，無法繼續上場比賽。若有一球隊正要投籃時，防守球隊犯規，進攻球隊獲得罰球的機會。如有技術性犯規（例如動作粗野，侮辱對手）時，另一隊可以罰球，而且罰球後可自中場發球。
    <   Typography/>
        在職業聯賽中，美國國家籃球協會(NBA)最為出名，是美國乃至於全球最高水平的職業籃球聯賽，其球隊遍布全美。歐洲籃球聯賽亦享有極高的水平和知名度。美國的職業籃球聯賽除了NBA，還有國家女子的籃球協會(WNBA)。國際賽則以奧林匹克運動會的籃球項目為最高榮譽。
        <Typography/>
        在大眾文化中，籃球亦同樣是全世界最風行的運動之一，並按照所能使用的場地大小、所能參與的人數多寡、時間限制等因素，籃球更常以一對一單打、三對三等街頭籃球比賽的形式，並搭配相對應的規則來進行。
        </Typography>
        <Typography paragraph>
        位置介紹：
        <Typography/>
        1.控球後衛（Point Guard；簡稱PG）：又叫組織後衛，是籃球比賽陣容中的一個固定位置。控球後衛往往是全隊進攻的組織者，並且具備了一定水準的進攻能力，通過對球的控制來決定在恰當的時間傳球給適合的球員。例如:Stephen Curry
        <Typography/>
        2.得分後衛（ Shooting Guard；簡稱SG）：
            一般擔任該位置的球員身高和體格都低於前鋒球員，但在速度上具有優勢。他們往往是比賽中最好的跳投手，但往往也能切入上籃。例如:Denny Green PS : 最強三分射手，外號靈堂射手
        <Typography/>  
        3.小前鋒（Small Forward；簡稱SF）：
            傳統上以進攻得分為主要任務，強調快速推進上籃的能力。隨著各種半場進攻戰術以及三分線的發展，現今籃壇的小前鋒除了速度以外，往往還被要求具備運球突破以及長距離投射的能力。由於強調速度多於強調力量，小前鋒通常較大前鋒靈活，而體格不如大前鋒壯碩。
            例如:Leborn James
        <Typography/>  
        4.大前鋒（ Power Forward；簡稱PF）
            一個典型的大前鋒是球場上體格較壯，而仍具備一定速度的球員。傳統上，大前鋒被要求利用他們壯碩的體型，在籃下積極強攻並爭奪進攻籃板球，並輔佐中鋒在禁區的防守。例如：Draymond Green PS: 可惜他沒獲獎，他那麼強悍ＱＱ
        <Typography/>
        5.中鋒（ Center ；簡稱C）：
            一般都由隊中最高的球員擔任，傳統上強調籃下的防守，以及防守籃板球的保護。由於具有身高的優勢，一些具備進攻天份的中鋒球員也常常成為在禁區附近投籃得分的主要進攻點。例如：zaza pachulia PS:勇士因為有他才打敗馬刺的
        </Typography>
        <Typography paragraph>
          <h11>參考資料：維基百科</h11>
        </Typography>
      </main>
    </div>
  );
}