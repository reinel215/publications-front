import { Avatar, Box, Button, Link, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getStatusPublications } from '../../../services/publicationService/getStatusPublications';
import { Post, PostStatus } from '../../../types/Post';


interface PublicationProps {
    post: Post,
    paperStyle?: React.CSSProperties;
    delatable?: boolean;
    onDelete?: (post : Post) => void;
}

export const Publication = ({ post, paperStyle, delatable, onDelete }: PublicationProps) => {
    return (
        <Paper variant="outlined" style={paperStyle} >
            <Box alignItems="center" flexDirection="row" display="flex" gap="5px" padding="12px">
                <Avatar alt="avatar" src={post.author.avatar} />
                <Typography variant="subtitle2" fontWeight="bold">
                    {`${post.author.name} ${post.author.surname}`}
                </Typography>

                <Link href="#" variant="body2">
                    {`@${post.author.username}`}
                </Link>

                <Typography variant="body2">
                    1d
                </Typography>
            </Box>


            <Box alignItems="center" flexDirection="column" display="flex" sx={{ marginTop: "10px", marginBottom: "10px" }}>

                {
                    post.image ?
                        <Box sx={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "10px" }}>
                            <img src={post.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        </Box>
                        : null
                }

                <Typography variant="body2" sx={{ margin: "0px 12px" }}>
                    {`${post.message}`}
                </Typography>

            </Box>

            {
                post.likes.length ?
                    <Box alignItems="center" flexDirection="row" display="flex" gap="2px" padding="12px">

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

                    : null
            }

            {
                delatable ?
                    <Button variant="text" onClick={() => onDelete(post)} color="secondary" disabled={ post.status === PostStatus.DELTED }>
                        Borrar
                    </Button>
                    :
                    null

            }


        </Paper>
    )
}