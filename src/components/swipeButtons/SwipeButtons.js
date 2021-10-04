import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./SwipeButtons.css"

const SwipeButtons = () => {
    return (
        <div className="swipe_container">
            <IconButton className="replay">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipe_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="flash">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
