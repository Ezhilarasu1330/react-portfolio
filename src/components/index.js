import React from 'react';

import Particles from 'react-particles-js';

import Navbar from './Navbar';
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles(theme => ({
    particlesCanva: {
        position: "absolute",
        opacity: "0.5"
    }
}));

const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 8,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />

        </>
    );
};

export default Home;