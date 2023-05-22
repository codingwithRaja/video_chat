import './post.css'
import { Close, Public, MoreHoriz, ThumbUp, Comment, Share } from '@mui/icons-material'
const Post = () => {
    return (
        <>

            <div className='post'>
                <div className="postTop">
                    <div className="postTopWrapper">
                        <img className='postTopImg' src="/assets/person/2.jpeg" alt="" />
                        <div className="postTopName">
                            <span>Jon Doe</span>
                            <div className="postTopTime">
                                <span className='postTopText'>3d</span>
                                <Public fontSize='15px !important' />
                            </div>
                        </div>
                        <div className="postTopIcons">
                            <div className="postTopIcon">
                                <MoreHoriz />
                            </div>
                            <div className="postTopIcon">
                                <Close />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postCenter">
                    <img className='postCenterImg' src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomStatus">
                        <div className="postBottomEmojis">
                            <img className='postBottomicon' src="/assets/like.png" alt="" />
                            <img className='postBottomicon' src="/assets/heart.png" alt="" />
                        </div>
                        <div className='postBottomSpan'>
                            <span className='postBottomText'> jane ,Emily Watson and 20 others</span>
                        </div>
                        <div className="postBottomCmt">
                            <span className='postBottomCmtText' >
                                9</span>
                            <Comment htmlColor='#0471e3' />
                        </div>
                    </div>
                    <hr className="postBottomHr" />
                    <div className="postBottomReact">
                        <div className="postBottomReactLike">
                            <ThumbUp />
                            <span className='postBottomText'>Like</span>
                        </div>
                        <div className="postBottomReactCmt">
                            <Comment />
                            <span className='postBottomText'>Comment</span>
                        </div>
                        <div className="postBottomReactShare">
                            <Share />
                            <span className='postBottomText'>Share</span>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Post