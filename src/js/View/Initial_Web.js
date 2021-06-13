import React from 'react';
import './Initial_Web_Form.css';
import SignInSide from '../../login_page/login_page';
import UserNames from './mainID';
//import Todo from './Todo/TodoApp'
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import Singuppage from '../../sing_up/sing_up_page'
import MainPage from '../../MainPage'
import Volleyball from '../../volleyball'
import Basketballvideo from '../../basketballvideo'
import Volleyballvideo from '../../volleyballvideo'

export default function Initial_Web(){
    return(  
        <Router>
            <Switch>
                <Route path = "/Catch"><UserNames  source="https://api.github.com/users/LinkRed1012"/></Route>
                <Route path = "/Volleyball"><Volleyball/></Route>
                <Route path = "/BasketballVideo"><Basketballvideo/></Route >
                <Route path = "/VolleyballVideo"><Volleyballvideo/></Route >  
                <Route path = "/MainPage"><MainPage/></Route >
                <Route path = "/signup" ><Singuppage/></Route>  
                <Route path = "/" ><SignInSide/></Route>
            </Switch>            
        </Router>
    )
} 
