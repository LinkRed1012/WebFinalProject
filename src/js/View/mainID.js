import React from 'react';
//import axios from 'axios';
import $ from 'jquery';
import {Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
class UserName extends React.Component{
    state = {
        person: null,
        loading:true
    };
    async componentDidMount(){
         const url = "http://100.25.157.222/account_data/api/post/personal.php" ;
         const response = await fetch(url);
         const data = await response.json();
         this.setState({person : data[0], loading:false } );
         console.log(data);
    }

     render(){
        return(  
        <div>
            {this.state.loading || !this.state.person ? (
            <div>loading</div>
            ):(
                <div>
            <h3>id:{this.state.person.personal_id}</h3>
            <h3>account:{this.state.person.personal_account}</h3>
            <h3>password:{this.state.person.personal_password}</h3>
            <Link exact to = "/MainPage">
            回到首頁
            </Link>
            </div>
            )}
        </div>
        );
    }
}

export default UserName;
