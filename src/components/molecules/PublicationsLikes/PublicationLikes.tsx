import React from 'react'
import { Avatar, Box, Link, Typography } from '@mui/material';
import { Post } from '../../../types/Post';
import { Link as RouterLink } from "react-router-dom";


interface PublicationLikesProps {
    post: Post,

}

export const PublicationLikes = ({ post }: PublicationLikesProps) => {
    return (
        <Box alignItems="center" flexDirection="row" display="flex" gap="2px" padding="0px 12px 12px 12px">

            {
                post.likes[0]?.avatar ?
                    <RouterLink to={`/profile/${post.likes[0].user_id}`} style={{ textDecoration: 'none' }}>
                        <Avatar alt="avatar" src={post.likes[0].avatar} sx={{ width: 24, height: 24 }} />
                    </RouterLink>

                    :
                    null
            }

            <Typography variant="subtitle2" fontWeight="bold">
                Le gusta a
            </Typography>

            <Link href="#" variant="body2">

            </Link>

            <RouterLink to={`/profile/${post.likes[0].user_id}`} style={{ textDecoration: 'none' }}>
                <Link sx={{ textDecoration: "none", fontWeight: "bold" }} component="div" variant="body2">
                    {` @${post.likes[0].username} `}
                </Link>
            </RouterLink>

            <Typography variant="subtitle2" fontWeight="bold">
                y
            </Typography>

            <Typography variant="body2">
                {post.likes.length - 1} mas
            </Typography>

        </Box>
    )
}