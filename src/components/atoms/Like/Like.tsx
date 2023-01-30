import { Box, IconButton, SxProps } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


interface LikeProps {
    isActive: boolean,
    style?: SxProps,
    onClickLike: () => void,
    onClickUnlike: () => void
}

export const Like = ({ isActive, style, onClickLike, onClickUnlike }: LikeProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "start", width: "100%", ...style }}>

            {
                isActive ?
                    <IconButton onClick={onClickUnlike} >
                        <FavoriteIcon color='secondary' fontSize="small" />
                    </IconButton>
                    :
                    <IconButton onClick={onClickLike}>
                        <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
            }



        </Box>
    )
}