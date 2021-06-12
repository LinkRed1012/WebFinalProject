import React from 'react';
//import axios from 'axios';
import $ from 'jquery';
import {Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';
class UserName extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
        online_name: '',
        username: '',
        githubUrl: '',    
        avataUrl: '',
        follwers: '',
        place: '',
    }
  }
  componentDidMount() {
    $.get(this.props.source, (result) => {
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
  }
  render(){
      return(
         
          <div>
              <p>ID:{this.state.online_name}</p><Typography/>  
              <h3>{this.state.username}</h3><Typography/>  
              <img src={this.state.avataUrl} /><p/><Typography/>  
              <a>location:{this.state.place}</a><Typography/>  
              <p>followers: {this.state.followers}</p><Typography/>  
              <a href={this.state.githubUrl}>Github Link </a>
             <Typography/>  
            <Link exact to = "/MainPage">
                回到首頁
            </Link>
           </div>

      )
  }
}
export default UserName;