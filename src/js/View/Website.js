import React from 'react';
//import LoginPage from '../View/LoginPage';
import SignInSide from '../View/sign';
//import Todo from '../View/todo/todo';
import Initial_Web from "../View/Initial_Web"

export default class Website extends React.Component{
    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}
    setRenderItem(){
        if(this.props.LoginStatus){
            return (<Initial_Web/>);
        }else{
            return (<SignInSide onLogin={this.props.onLogin}/>);
        }
    }
    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}
  