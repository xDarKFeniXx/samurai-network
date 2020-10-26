import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersStateSelector} from "../../store/users/users-selectors";
import {getUsersAction} from "../../store/users/users-reducer";
import Pagination from '@material-ui/lab/Pagination';
import {UserCard} from "../../components/user-card";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root:{},
    pagination:{},
    userContainer:{
        display:'grid',
        gridGap: theme.spacing(3),
    }
}))

export const UsersPage:React.FC = () => {
    const usersState=useSelector(usersStateSelector)
    const dispatch=useDispatch()
    const classes=useStyles()
    useEffect(()=>{
        dispatch(getUsersAction({page:usersState.currentPage, pageSize:usersState.pageSize}))
    }, [])
    console.log(usersState.users)
    const users=usersState.users.map(user=><UserCard key={ user.id} user={user}/>)
    if(usersState.isFetching){
        return(
            <div>loading</div>
        )
    }
    return (
        <div className={classes.root}>
            <Pagination className={classes.pagination}
                count={usersState.totalUsersCount} variant="outlined" shape="rounded" />
            <Container className={classes.userContainer}>
                {users}
            </Container>
        </div>
    );
};

