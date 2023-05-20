import React from 'react'
import "./sidebar.css"
import { Flag, Store, Home, LiveTv, People, SportsEsports } from '@mui/icons-material'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarHome">
                <Home fontSize='large' htmlColor='#0571ed' className='sidebarHomeIcon' />
                <span className="sidebarHomeText">Home</span>
            </div>
            <div className="sidebarWrapper">
                <img className='sidebarImg' src="/assets/person/1.jpeg" alt="" />
                <span className="sidebarWrapperText">Alina Joe's</span>
            </div>
            <hr className='sidebarHr' />
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <LiveTv htmlColor='#0571ed' className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Watch
                    </span>
                </li>
                <li className="sidebarListItem">
                    <People htmlColor='#0571ed' className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Friends
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Flag htmlColor=' #ffaf1a' className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Pages
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Store htmlColor='#0571ed' className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Marketplace
                    </span>
                </li>
                <li className="sidebarListItem">
                    <SportsEsports htmlColor='#0571ed' className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Gaming
                    </span>
                </li>

            </ul>
            <button className="sidebarBtn">
                See all
            </button>
            <hr className="sidebarHr" />
            <div className="sidebarFriendList">

                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Jon Doe
                    </span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Nimmi Orcha
                    </span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Tim Eddie
                    </span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Imran Khan
                    </span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Rj Ali
                    </span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">
                        Adam Lee
                    </span>
                </li>
            </div>
        </div>

    )
}

export default Sidebar