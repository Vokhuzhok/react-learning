import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";


const Users = (props) => {

let getUsers = () => {
    if (props.users.lenght === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then (response => {
        props.setUsers(response.data.item)
    });
}
};

return (
    <div>
        <button onClick = {getUsers}>Get Users</button>
        {
            props.users.map (ue => <div key = {ue.id} className = {s.users}> 
            <div className = {s.left}> 
                <div className = {s.ava}>
                    <img src={ue.photos.small}/>
                </div>
                <div>
                    {ue.name}
                </div>
                <div className = {s.button}>
                   {ue.followed ? 
                   <button onClick = { () => { props.unfollow (ue.id) } }>Unfollow</button> :
                    <button onClick = { () => { props.follow (ue.id) } }>Follow</button>}
                </div>                
            </div>
            <div className = {s.center}>
                <div className = {s.status}>
                    {ue.status}
                </div>
            </div>
            <div className = {s.right}>
                <div>
                    {"city"}
                </div>
                <div>
                    {"country"}
                </div>
            </div>
            </div>)
        }
    </div>
)
}

export default Users;