import React from 'react'
import { PermMedia, EmojiEmotions, VideoCameraFront } from '@mui/icons-material'
import "./share.css"

const Share = () => {
    return (
        <>
            <div className='share'>
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className='shareProfileImg' src="/assets/person/1.jpeg " alt="" />
                        <input placeholder="What's on your mind ,Alina?" className="shareInput" />

                    </div>
                    <hr className='shareHr' />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <VideoCameraFront htmlColor=' #ff3300' className='shareIcon' />
                                <span className='shareOptionText'>Live Video</span>
                            </div>

                            <div className="shareOption">
                                <PermMedia htmlColor='green' className='shareIcon' />
                                <span className='shareOptionText'>Photos/Video </span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                                <span className='shareOptionText'>Feeling/activity</span>
                            </div>
                        </div>
                        {/* <button className="shareBtn">
                        Share
                    </button> */}
                    </div>
                </div>

            </div>
        </>

    )
}

export default Share