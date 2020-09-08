import React from 'react';

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            color: "tomato",
            maxWidth: "12.375rem"
        }
    }
});


const Footer = () => {

    const classes = useStyles();

    function openLink(socialMediaName) {
        if (socialMediaName === "GitHub") {
            window.open("https://github.com/Ezhilarasu1330", '_blank');
        }
        else if (socialMediaName === "LinkedIn") {
            window.open("https://www.linkedin.com/in/ezhil-arasu-32730a11b/", '_blank');
        }
        else if (socialMediaName === "Facebook") {
            window.open("https://www.facebook.com/ezhil.arasu.587", '_blank');
        }
        else if (socialMediaName === "Twitter") {
            window.open("https://twitter.com/Ezhilar35019813", '_blank');
        }
        else if (socialMediaName === "Instagram") {
            window.open("https://www.instagram.com/e_z_h_i_l_9_6/", '_blank');
        }
    }

    return (
        <BottomNavigation width="auto" style={{ background: "#222" }}>
            <BottomNavigationAction
                onClick={() => openLink("GitHub")}
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHub />}
            />
            <BottomNavigationAction
                onClick={() => openLink("LinkedIn")}
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedIn />}
            />
            <BottomNavigationAction
                onClick={() => openLink("Facebook")}
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Facebook />}
            />
            {/* <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Twitter />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram />}
            /> */}
        </BottomNavigation>
    );
};

export default Footer;