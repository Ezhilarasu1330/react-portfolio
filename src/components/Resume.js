import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from "@material-ui/core";

import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% -5 px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "12.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {

    const classes = useStyles();

    return (
        <>

            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography className={classes.heading} variant="h4" align="center">
                    Working Experience
                </Typography>

                <Box component="div" className={classes.timeLine}>
                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2017 - 2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} variant="h5">
                            Java Developer
                        </Typography>
                        <Typography style={{ color: "tomato" }}
                            variant="body1" >
                            Yaali Inventory
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Utilized Java, Eclipse, tested programming code & Applications, collaborated with team and management.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Implemented Woocommerce & Etsy Channel Integration to the application called Yaali Inventory Management.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Designed & Developed users control in Yaali Inventory Management.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Created & Maintained a centralized repository.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Responsible for investigating the issues, defects, determining the root cause, formulating corrective action recommendations & implementing them.
                        </Typography>
                    </Box>


                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2018 - 2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} variant="h5">
                            Full Stack Developer
                        </Typography>
                        <Typography style={{ color: "tomato" }}
                            variant="body1" >
                            RippleHire
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Implemented localization for the candidate and employee module.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Involved in requirements gathering, analyzing functional documents, and workflow from the clients and designing the prototypes based on that.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Designed and developed new feature which will be used to schedule an interview with calendar interface.
                        </Typography>
                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Integrated Microsoft Outlook into the application.
                        </Typography>
                    </Box>



                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} variant="h5">
                            Full Stack Developer
                        </Typography>
                        <Typography style={{ color: "tomato" }}
                            variant="body1" >
                            Syntoniq
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Implemented Email template management.
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Involved in requirements gathering, analyzing functional documents.
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Worked with a team and developed new features.
                        </Typography>
                    </Box>


                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography className={classes.subHeading} variant="h5">
                            Full Stack Developer
                        </Typography>
                        <Typography style={{ color: "tomato" }}
                            variant="body1" >
                            Bast Access Doors And Panels
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Designed & Implemented quartz scheduler to sync amazon orders to Zoho CRM.
                        </Typography>

                        <Typography style={{ color: "tan" }}
                            variant="subtitle1" >
                            •	Designed and devloped an database to capture amazon shipment and tracking logs.
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Resume;