import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import defaultAvatar from "../../assets/images/user.png";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Skeleton } from '@material-ui/lab';
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
export const UserCardSkeleton = () => {
    const classes=useStyles()
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Skeleton animation="wave" variant="circle" width={40} height={40} />

                }

                title={<Skeleton animation="wave"  width="80%" />}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <Skeleton />
                </Typography>
                <Typography variant="h5" component="h2">
                    <Skeleton />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Skeleton />
                </Typography>
                <Typography variant="body2" component="p">
                    <Skeleton />
                    <br />
                    <Skeleton />
                </Typography>
            </CardContent>
            <CardActions>
                <Skeleton animation="wave" height={10} width="10%" />
            </CardActions>
        </Card>
    );
}
