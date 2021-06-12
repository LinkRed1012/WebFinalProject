import React from 'react';
import UserName from './mainID';

export default function UserNames(){
    return(
        
        <div>
            <p>ID:{UserName.state.online_name}</p>
            <h3>{UserName.state.username}</h3>
            <img src={UserName.state.avataUrl} /><p/>
            <a>location:{UserName.state.place}</a>
            <p>followers: {UserName.state.followers}</p>
            <a href={UserName.state.githubUrl}>Github Link </a>
        </div>
    );
}