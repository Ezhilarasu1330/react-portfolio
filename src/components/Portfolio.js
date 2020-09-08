import React from 'react';
import { Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Navbar from "./Navbar";

import project1 from '../images/portfolio_images/yaali_inventory.png';
import project2 from '../images/portfolio_images/ripplehire_logo.jpg';
import project3 from '../images/portfolio_images/syntoniq_logo.jpg';
import project4 from '../images/portfolio_images/amazon_mws.jpg';


// CSS Styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
}));

const Portfolio = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Yaali Inventory
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div style={{ color: "tomato" }}>
                                        Technologies Used :
                                    </div>
                                    <br />
                                    <div>
                                        Java, Spring Boot, Spring Security, JOOQ, Postgres, Redis
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                                Show more
                            </Button>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                        </CardActions>

                    </Card>
                </Grid>

                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project2}
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Ripple Hire
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div style={{ color: "tomato" }}>
                                        Technologies Used :
                                    </div>
                                    <br />
                                    <div>
                                        Java, Spring Boot, Mysql, Localization, Html, CSS, Backbone JS, Jquery
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                                Show more
                            </Button>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                        </CardActions>

                    </Card>
                </Grid>

                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project3}
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Syntoniq
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div style={{ color: "tomato" }}>
                                        Technologies Used :
                                    </div>
                                    <br />
                                    <div>
                                        Angular, Node JS, Express, Mongo DB
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                                Show more
                            </Button>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                        </CardActions>

                    </Card>
                </Grid>

                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project4}
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Amazon Sync
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div style={{ color: "tomato" }}>
                                        Technologies Used :
                                    </div>
                                    <br />
                                    <div>
                                        Java, Spring Boot, Mysql, MWS
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                                Show more
                            </Button>
                            <Button size="small" color="primary">
                                Share
                                </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;