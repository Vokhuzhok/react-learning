import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

return (
    <div>
        {
            props.users.map (ue => <div key = {ue.id} className = {s.users}> 
            <div className = {s.left}> 
                <div className = {s.ava}>
                    <img src={ue.ava}/>
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
                    {ue.location.city}
                </div>
                <div>
                    {ue.location.country}
                </div>
            </div>
            </div>)
        }
    </div>
)
}

export default Users;