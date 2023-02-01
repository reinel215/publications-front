import { Avatar, Box, Button, IconButton, Link, Paper, Typography } from '@mui/material';
import React from 'react';
import { Post, PostDb, PostStatus } from '../../../types/Post';
import { PublicationLikes } from '../../molecules/PublicationsLikes/PublicationLikes';
import { Like } from '../../atoms/Like/Like';
import { useUserDataStore } from '../../../store/user/userDataStore';
import { Link as RouterLink } from "react-router-dom";

interface PublicationProps {
    post: PostDb,
    paperStyle?: React.CSSProperties;
    delatable?: boolean;
    onDelete?: (post: PostDb) => void;
    publishable?: boolean;
    onPublish?: (post: PostDb) => void;
    onClickLike: () => void,
    onClickUnlike: () => void
}

export const Publication = ({ post, paperStyle, delatable, onDelete, publishable, onPublish, onClickLike, onClickUnlike }: PublicationProps) => {

    const user = useUserDataStore(state => state.user);

    return (
        <Paper variant="outlined" style={paperStyle} data-testid="publication">
            <Box alignItems="center" flexDirection="row" display="flex" gap="5px" padding="12px">

                {
                    post.author?.avatar ?
                        <RouterLink to={`/profile/${post.author.user_id}`} style={{ textDecoration: 'none' }}>
                            <Avatar alt="avatar" src={post.author.avatar} />
                        </RouterLink>
                        :
                        null
                }
                <Typography variant="subtitle2" fontWeight="bold">
                    {`${post.author.name} ${post.author.surname}`}
                </Typography>


                <RouterLink to={`/profile/${post.author.user_id}`} style={{ textDecoration: 'none' }}>
                    <Link sx={{ textDecoration: "none", fontWeight: "bold" }} component="div" variant="body2">
                        {`@${post.author.username}`}
                    </Link>
                </RouterLink>

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
                        <Like
                            isActive={!!post?.likes?.find(post => post.user_id === user?.user_id)}
                            onClickLike={onClickLike}
                            onClickUnlike={onClickUnlike}
                        />
                        :
                        null
                }

                {
                    post?.likes?.length && post.image ?
                        <PublicationLikes post={post} />
                        : null
                }

                <Typography variant="body2" sx={{ margin: "0px 12px" }}>
                    {`${post.message}`}
                </Typography>

            </Box>

            {
                !post.image ?
                    <Like
                        isActive={!!post?.likes?.find(post => post.user_id === user?.user_id)} style={{ margin: "0px 5px" }}
                        onClickLike={onClickLike}
                        onClickUnlike={onClickUnlike}
                    />
                    :
                    null
            }



            {
                post?.likes?.length && !post.image ?
                    <PublicationLikes post={post} />
                    : null
            }

            {
                delatable ?
                    <Button variant="text" onClick={() => onDelete?.(post)} color="secondary" disabled={post.status === PostStatus.DELTED}>
                        Borrar
                    </Button>
                    :
                    null

            }


            {
                publishable ?
                    <Button variant="text" onClick={() => onPublish?.(post)} disabled={post.status === PostStatus.PUBLISHED}>
                        Publicar
                    </Button>
                    :
                    null

            }


        </Paper>
    )
}