import React from 'react'
import './topnav.scss'
import UserInfor from '../user-info/UserInfor'
import { data } from '../../constants'

const TopNav = () => {
    return (
        <div className='topnav'>
            <UserInfor user={ data.user } />
            <div className="sidebar-toggle">
                <i className='bx bx-menu-alt-right'></i>
            </div>
        </div>
    )
}

export default TopNav
