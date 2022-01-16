import React, { useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <div className='sidebar'>
            <div className="sidebar_logo">
                <img src={images.logo} alt="" />
                <div className="sidebar-close">
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar_menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={index} className={`sidebar_menu_item ${activeIndex === index && 'active'}`}>
                            <div className="sidebar_menu_item_icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar_menu_item_txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar_menu_item">
                    <div className="sidebar_menu_item_icon">
                        <i class='bx bx-log-out' ></i>
                    </div>
                    <div className="sidebar_menu_item_txt">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
