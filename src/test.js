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
         const url = "http://localhost/account_data/api/post/personal.php" ;
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
            <div>{this.state.person.personal_account}</div>
            )}
        </div>
        );
    }
}

export default UserName;