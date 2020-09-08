import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon, Avatar, Divider, List, Typography, Box, Slider } from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import MobileRightMenuSlider from '@material-ui/core/Drawer';

import avatar from '../images/ezhil_avatar.png';

import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        backgroundColor: '#511',
        height: '100%'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact Info",
        listPath: "/contact"
    }
]

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider("right", false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Ezhilarasu" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Box>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}> Portfolio </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClick={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;