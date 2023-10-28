import React from 'react'
import "./Feed.css";
import { Button } from "@mui/material";

function Feed() {
  return (
    <div className='feed'>
        {/* Header */}

        <h2>Home</h2>

        {/* TweetBox */}
        <textarea />
        <Button className='tweetButton' variant="outlined">
          Tweet
        </Button>
        {/* Post */}
    </div>
  )
}

export default Feed