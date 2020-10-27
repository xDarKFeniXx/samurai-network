import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersStateSelector} from "../../store/users/users-selectors";
import {getUsersAction, setCurrentPageAction} from "../../store/users/users-reducer";
import Pagination from '@material-ui/lab/Pagination';
import {UserCard} from "../../components/user-card/user-card";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {UserCardSkeleton} from "../../components/user-card/user-card-skeleton";

const useStyles = makeStyles((theme) => ({
    root:{},
    pagination:{
        paddingTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userContainer:{
        paddingTop: 10,
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: theme.spacing(3),
    }
}))

export const UsersPage:React.FC = () => {
    const usersState=useSelector(usersStateSelector)
    const dispatch=useDispatch()
    const classes=useStyles()
    useEffect(()=>{
        dispatch(getUsersAction({page: usersState.currentPage, pageSize: usersState.pageSize}))
    }, [dispatch, usersState.currentPage, usersState.pageSize])

    const handlePageChange=(page:number)=>{
        dispatch(setCurrentPageAction(page))
    }

    const users=usersState.users.map(user=><UserCard key={ user.id} user={user}/>)
    if(usersState.isFetching){
        return(
            <div className={classes.root}>
                <Pagination className={classes.pagination}
                            count={10}
                            page={1}
                            variant="outlined" shape="rounded" />
                <Container className={classes.userContainer}>
                    {new Array(3).fill(0).map((user, index)=> {
                        return(
                        <UserCardSkeleton key={index}/>
                        )
                    })}
                </Container>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <Pagination className={classes.pagination}
                        onChange={(e, page)=>handlePageChange(page)}
                        count={usersState.totalUsersCount}
                        page={usersState.currentPage}
                        variant="outlined" shape="rounded" />
            <Container className={classes.userContainer}>
                {users}
            </Container>
        </div>
    );
};

