import React from 'react'
import "./topbar.css"
import { Search, Notifications, Message } from '@mui/icons-material'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Xneonbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search fontSize='medium' htmlColor='black' className='searchIcon' />
                    <input placeholder='Search Xneonbook' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Message fontSize='medium' htmlColor='black' />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications fontSize='medium' htmlColor='black' />
                        <span className="topbarIconBadge">6</span>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    )
}

export default Topbar