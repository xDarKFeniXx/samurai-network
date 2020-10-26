import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Copyright} from './copyright';


export const StickyFooter:React.FC=() =>{


    return (


                <Container maxWidth="sm">
                    <Typography variant="body1">Social Network from SamuraiJS and IT-Kamasutra</Typography>
                    <Copyright />
                </Container>


    );
}
