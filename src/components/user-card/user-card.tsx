import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {UserType} from "../../store/users/users-reducer";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import defaultAvatar from '../../assets/images/user.png'
const useStyles = makeStyles({
    root: {
        width: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
type PropsT={
    user:UserType
}

export const UserCard:React.FC<PropsT>=({user})=> {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={user.photos.small?user.photos.small:defaultAvatar}/>

                }

                title={user.name}
                subheader={user.followed? "followed":"not followed"}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {user.name}
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button

                    size="small">{user.followed? "unfollow": "follow"}</Button>
            </CardActions>
        </Card>
    );
}
