import { Avatar, Box, CircularProgress, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePublications } from '../../../hooks/usePublications';
import { getUser } from '../../../services/userService/getUser';
import { PostStatus } from '../../../types/Post';
import { User } from '../../../types/User';
import { Publication } from '../../organism/Publication/Publication';



export const Profile = () => {

    const { userId } = useParams<{ userId: string }>();
    const [userLoading, setUserLoading] = useState<Boolean>(true);
    const [user, setUser] = useState<User | null>(null);
    const { publications, onDelete, like, unLike, loading } = usePublications({ filter: { status: [PostStatus.PUBLISHED, PostStatus.DRAFTED, PostStatus.DELTED], user_id: userId } })

    const fetchUser = async () => {
        try {
            setUserLoading(true);
            const userfetch = await getUser({ userId: userId });
            setUser(userfetch);
        } catch (error) {
            console.error("Error", error);
        } finally {
            setUserLoading(false)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId])






    return (
        <Box alignItems="center" justifyContent="center" display="flex" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >
            {
                (loading || userLoading || !user)?
                    <CircularProgress />
                    :
                    <>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", height: "100%", marginTop: "20px" }}>
                            <Paper variant="outlined" style={{ maxWidth: 400, minWidth: 200, display: "flex", flexDirection: "column", alignItems: "center", padding: "8px" }}>
                                <Avatar alt="avatar" src={user.avatar} sx={{ width: 56, height: 56 }} />

                                <Typography variant="subtitle2" fontWeight="bold">
                                    {`${user.username}`}
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", marginLeft: "10px" }}>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        Nombre:
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {`${user.name}`}
                                    </Typography>
                                </Box>

                                <Divider role="presentation" style={{ width: '100%' }} />

                                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", marginLeft: "10px" }}>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        Apellido:
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {`${user.surname}`}
                                    </Typography>
                                </Box>

                                <Divider role="presentation" style={{ width: '100%' }} />

                                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", marginLeft: "10px" }}>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        Rol:
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {`${user.role}`}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>



                        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >


                            {

                                publications.map(post => <Publication
                                    key={post.post_id}
                                    post={post}
                                    paperStyle={{ maxWidth: 400, width: "100%" }}
                                    delatable
                                    onDelete={onDelete}
                                    onClickLike={() => like(post)}
                                    onClickUnlike={() => unLike(post)}
                                />)

                            }


                        </Box>
                    </>
            }


        </Box>
    )
}