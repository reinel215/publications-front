import React from 'react'
import { Avatar, Box, Link, Typography } from '@mui/material';
import { Post } from '../../../types/Post';


interface PublicationLikesProps {
    post: Post,

}

export const PublicationLikes = ({ post }: PublicationLikesProps) => {
    return (
        <Box alignItems="center" flexDirection="row" display="flex" gap="2px" padding="0px 12px 12px 12px">

            <Avatar alt="avatar" src={post.likes[0].avatar} sx={{ width: 24, height: 24 }} />
            <Typography variant="subtitle2" fontWeight="bold">
                Le gusta a
            </Typography>

            <Link href="#" variant="body2">
                {` @${post.likes[0].username} `}
            </Link>

            <Typography variant="subtitle2" fontWeight="bold">
                y
            </Typography>

            <Typography variant="body2">
                {post.likes.length - 1} mas
            </Typography>

        </Box>
    )
}