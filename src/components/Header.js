import React from 'react';

import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../images/ezhil_avatar.png';

import { makeStyles } from '@material-ui/core/styles';


// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {

    const classes = useStyles();

    return (

        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Ezhilarasu" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed
                    strings={['Ezhilarasu']}
                    typeSpeed={40}
                />
            </Typography>

            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={['Programmer', 'Engineer', 'Learner']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header;