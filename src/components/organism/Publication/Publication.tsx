import { Avatar, Box, Button, IconButton, Link, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getStatusPublications } from '../../../services/publicationService/getStatusPublications';
import { Post, PostStatus } from '../../../types/Post';
import { PublicationLikes } from '../../molecules/PublicationsLikes/PublicationLikes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Like } from '../../atoms/Like/Like';
import { useUserDataStore } from '../../../store/user/userDataStore';

interface PublicationProps {
    post: Post,
    paperStyle?: React.CSSProperties;
    delatable?: boolean;
    onDelete?: (post: Post) => void;
    publishable?: boolean;
    onPublish?: (post: Post) => void;
}

export const Publication = ({ post, paperStyle, delatable, onDelete, publishable, onPublish }: PublicationProps) => {

    const user = useUserDataStore(state => state.user);

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


            <Box alignItems="start" flexDirection="column" display="flex" sx={{ marginTop: "10px", marginBottom: "10px", justifyContent: "start" }}>

                {
                    post.image ?
                        <Box sx={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "10px" }}>
                            <img src={post.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        </Box>
                        : null
                }

                {
                    post.image ?
                        <Like isActive={!!post.likes.find(post => post.user_id === user.user_id)} />
                        :
                        null
                }

                {
                    post.likes.length && post.image ?
                        <PublicationLikes post={post} />
                        : null
                }

                <Typography variant="body2" sx={{ margin: "0px 12px" }}>
                    {`${post.message}`}
                </Typography>

            </Box>

            {
                post.likes.length && !post.image ?
                    <>
                        <Like isActive={!!post.likes.find(post => post.user_id === user.user_id)} style={{margin: "0px 5px"}} />

                        <PublicationLikes post={post} />
                    </>

                    : null
            }

            {
                delatable ?
                    <Button variant="text" onClick={() => onDelete(post)} color="secondary" disabled={post.status === PostStatus.DELTED}>
                        Borrar
                    </Button>
                    :
                    null

            }


            {
                publishable ?
                    <Button variant="text" onClick={() => onPublish(post)} disabled={post.status === PostStatus.PUBLISHED}>
                        Publicar
                    </Button>
                    :
                    null

            }


        </Paper>
    )
}