import React ,{useEffect}from 'react';
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
import ReactGA from 'react-ga'
import { useLocation } from "react-router-dom";

ReactGA.initialize('UA-193248929-1');




export default function Initial_Web(){
    
    const location = useLocation(); 

    useEffect(() => {
        // To Report Page View 
        ReactGA.pageview(location.pathname + location.search);
      }, [location]);
    return(  
        <Router>
            <Switch>
                <Route path = "/Catch"><UserNames/></Route>
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
