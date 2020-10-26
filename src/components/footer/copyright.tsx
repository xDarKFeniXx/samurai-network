import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";


export function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                xDarKFeniXx
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
