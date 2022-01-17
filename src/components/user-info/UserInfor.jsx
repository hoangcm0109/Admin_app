import React from 'react'
import './user-info.scss'

const UserInfor = ({ user }) => {

    return (
        <div className='user-infor'>
            <div className="user-infor-img">
                <img src={user.img} alt="" />
            </div>
            <div className="user-infor-name">
                <span>{user.name}</span>
            </div>
        </div>
    )
}

export default UserInfor
