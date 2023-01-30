import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePublications } from '../../../hooks/usePublications';
import { useUserDataStore } from '../../../store/user/userDataStore';
import { PostStatus } from '../../../types/Post';
import { Roles } from '../../../types/User';
import { Publication } from '../../organism/Publication/Publication';

export const Home = () => {

    const history = useHistory();
    const [sort, setSort] = useState("DESC");
    const { publications, like, unLike } = usePublications({ filter: { status: [PostStatus.PUBLISHED], sortBy: sort } })
    const user = useUserDataStore(state => state.user);

    return (
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >

            {
                user.role === Roles.USER ?
                    <Button variant="text" onClick={() => history.push("/create-publication")}>
                        + Crear publicacion
                    </Button>
                    :
                    null
            }


            <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => setSort("ASC")}>ASC</Button>
                <Button onClick={() => setSort("DESC")}>DESC</Button>
            </ButtonGroup>



            {
                publications.map(post => <Publication
                    key={post.post_id}
                    post={post}
                    paperStyle={{ maxWidth: 400, width: "40%" }}
                    onClickLike={() => like(post)}
                    onClickUnlike={() => unLike(post)}
                />)
            }
        </Box>
    )
}