import React from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles, Grid, Button, useMediaQuery, useTheme
} from '@material-ui/core';
import Logo from '../assets/offwhite.png';

// DESKTOP \\
import offWhiteOne from '../assets/collection/desktop/offWhiteOne.jpg';
import offWhiteTwo from '../assets/collection/desktop/offWhiteTwo.jpg'
import offWhiteThree from '../assets/collection/desktop/offWhiteThree.jpg'
import virgilIkeaOne from '../assets/collection/desktop/virgilIkeaOne.jpg'
import virgilIkeaTwo from '../assets/collection/desktop/virgilIkeaTwo.jpg'
import virgilIkeaThree from '../assets/collection/desktop/virgilIkeaThree.jpg'
import virgilLouisOne from '../assets/collection/desktop/virgilLouisOne.jpg';
import virgilLouisTwo from '../assets/collection/desktop/virgilLouisTwo.jpg';
import virgilLouisThree from '../assets/collection/desktop/virgilLouisThree.jpg';
import virgilNikeOne from '../assets/collection/desktop/virgilNikeOne.jpg';
import virgilNikeTwo from '../assets/collection/desktop/virgilNikeTwo.jpg';
import virgilNikeThree from '../assets/collection/desktop/virgilNikeThree.jpg';

// MOBILE \\
import offWhiteOneMobile from '../assets/collection/mobile/offWhiteOne.jpg';
import offWhiteTwoMobile from '../assets/collection/mobile/offWhiteTwo.jpg'
import offWhiteThreeMobile from '../assets/collection/mobile/offWhiteThree.jpg'
import virgilIkeaOneMobile from '../assets/collection/mobile/virgilIkeaOneMobile.jpg'
import virgilIkeaTwoMobile from '../assets/collection/mobile/virgilIkeaTwoMobile.jpg'
import virgilIkeaThreeMobile from '../assets/collection/mobile/virgilIkeaThreeMobile.jpg'
import virgilLouisOneMobile from '../assets/collection/mobile/virgilLouisOneMobile.jpg';
import virgilLouisTwoMobile from '../assets/collection/mobile/virgilLouisTwoMobile.jpg';
import virgilLouisThreeMobile from '../assets/collection/mobile/virgilLouisThreeMobile.jpg';
import virgilNikeOneMobile from '../assets/collection/mobile/virgilNikeOneMobile.jpg';
import virgilNikeTwoMobile from '../assets/collection/mobile/virgilNikeTwoMobile.jpg';
import virgilNikeThreeMobile from '../assets/collection/mobile/virgilNikeThreeMobile.jpg';

// TABLET \\
import offWhiteOneTab from '../assets/collection/tablet/offWhiteOneTab.jpg';
import offWhiteTwoTab from '../assets/collection/tablet/offWhiteTwoTab.jpg'
import offWhiteThreeTab from '../assets/collection/tablet/offWhiteThreetab.jpg'
import virgilIkeaOneTab from '../assets/collection/tablet/virgilIkeaOneTab.jpg'
import virgilIkeaTwoTab from '../assets/collection/tablet/virgilIkeaTwoTab.jpg'
import virgilIkeaThreeTab from '../assets/collection/tablet/virgilIkeaThreeTab.jpg'
import virgilLouisOneTab from '../assets/collection/tablet/virgilLouisOneTab.jpg';
import virgilLouisTwoTab from '../assets/collection/tablet/virgilLouisTwoTab.jpg';
import virgilLouisThreeTab from '../assets/collection/tablet/virgilLouisThreeTab.jpg';
import virgilNikeOneTab from '../assets/collection/tablet/virgilNikeOneTab.jpg';
import virgilNikeTwoTab from '../assets/collection/tablet/virgilNikeTwoTab.jpg';
import virgilNikeThreeTab from '../assets/collection/tablet/virgilNikeThreeTab.jpg';

const useStyles = makeStyles((theme) => ({
    collection: {
        width: "87%",
        marginTop: "-125em",
        marginLeft: "6.5em",
        [theme.breakpoints.down("md")]: {
          width: "95%",
          marginTop: "-123.5em",
          margin: "0 auto",
          marginLeft:'3em'
        },
      },
      mainGridContainer: {},
      containerOne: {
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "1em",
        },
      },
      containerTwo: {
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "1em",
        },
      },
      containerThree: {
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "1em",
        },
      },
      containerFour: {
        marginBottom: "3em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
        },
      },
      offWhiteOne: {
        backgroundImage: "url(" + offWhiteOne + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "5em",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
          backgroundImage: "url(" + offWhiteOneTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + offWhiteOneMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      offWhiteTwo: {
        backgroundImage: "url(" + offWhiteTwo + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "auto",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
          backgroundImage: "url(" + offWhiteTwoTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + offWhiteTwoMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      offWhiteThree: {
        backgroundImage: "url(" + offWhiteThree + ")",
        backgroundRepeat: "no-repeat",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + offWhiteThreeTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + offWhiteThreeMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilIkeaOne: {
        backgroundImage: "url(" + virgilIkeaOne + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "5em",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilIkeaOneTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilIkeaOneMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilIkeaTwo: {
        backgroundImage: "url(" + virgilIkeaTwo + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "auto",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilIkeaTwoTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilIkeaTwoMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilIkeaThree: {
        backgroundImage: "url(" + virgilIkeaThree + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilIkeaThreeTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilIkeaThreeMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilLouisOne: {
        backgroundImage: "url(" + virgilLouisOne + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "5em",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilLouisOneTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilLouisOneMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilLouisTwo: {
        backgroundImage: "url(" + virgilLouisTwo + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "auto",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilLouisTwoTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilLouisTwoMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilLouisThree: {
        backgroundImage: "url(" + virgilLouisThree + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilLouisThreeTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilLouisThreeMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilNikeOne: {
        backgroundImage: "url(" + virgilNikeOne + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "5em",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilNikeOneTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilNikeOneMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilNikeTwo: {
        backgroundImage: "url(" + virgilNikeTwo + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "auto",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        backgroundSize: "100%",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilNikeTwoTab + ")",
          height: "22em",
        },
    
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilNikeTwoMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      virgilNikeThree: {
        backgroundImage: "url(" + virgilNikeThree + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width: "29%",
        height: "30em",
        textDecoration: "none",
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.6s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
        },
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginBottom: "2em",
          backgroundSize: "100%",
    
          backgroundImage: "url(" + virgilNikeThreeTab + ")",
          height: "22em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "95%",
          marginBottom: "2em",
          backgroundImage: "url(" + virgilNikeThreeMobile + ")",
          backgroundSize: "100%",
          height: "17em",
        },
      },
      collectionTitle: {
        color: "white",
        marginTop: "20.5em",
    
        width: "80%",
        textAlign: "left",
        marginLeft: "1.35em",
        fontSize: "1.3em",
        fontWeight: "500",
        [theme.breakpoints.down("md")]: {
          marginTop: "6em",
          fontSize: "2.5em",
        },
        [theme.breakpoints.down('sm')]:{
          fontSize:'1.5em',
          marginTop:'8em'
        }
      },
      collectionDate: {
        color: "white",
    
        width: "80%",
        textAlign: "left",
        marginLeft: "1.7em",
        [theme.breakpoints.down("md")]: {
          marginLeft: "2.6em",
          fontSize: "1.3em",
        },
        [theme.breakpoints.down('sm')]:{
          fontSize:'0.85em',
          marginLeft:'2.4em'
        }
      },
      Footer: {
        background: "#EEEFF4",
        width: "92%",
        marginLeft: "0em",
        marginTop: "5em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          marginTop: "6em",
        },
      },
      logoMainContainer: {
        background: "black",
        width: "15%",
        boxSizing: "border-box",
        height: "12em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "30%",
          position: "inherit",
          marginTop: "-3em",
          height: "8em",
        },
      },
      logoContainer: {},
      logo: {
        marginTop: "4em",
        [theme.breakpoints.down("sm")]: {
          width: "5em",
          marginTop: "2.7em",
        },
      },
      linksContainer: {
        width: "60%",
        marginLeft: "3em",
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          marginTop: "5em",
        },
      },
      links: {
        margin: 0,
        height: "3em",
        marginRight: "2em",
        width: "20%",
        fontFamily: "Spartan, sans-serif",
        fontWeight: 700,
        fontSize: "0.75em",
        textDecoration: "none",
        color: "black",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          textAlign: "center",
        },
      },
      buttonMainContainer: {
        width: "20%",
        position: "absolute",
        left: "70%",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          textAlign: "center",
          marginTop: "1em",
          left: 0,
          position: "static",
        },
      },
      buttonContainer: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "1em",
        },
      },
      button: {
        color: "white",
        background: "black",
        fontFamily: "Spartan, sans-serif",
      },
    
      mobileStepper: {
        marginTop: "4.8em",
        background: "#EEEFF4",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
        },
      },
      backShadow: {
        background: "rgba(27, 20, 17, 0.3)",
        height: "100%",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          background: "rgba(27, 20, 17, 0.3)",
          height: "100%",
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          background: "rgba(27, 20, 17, 0.3)",
          height: "100%",
          width: "100%",
        },
      },    
}))

const Collection = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.collection}>
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            className={classes.containerOne}
          >
            <Grid
              item
              container
              direction="column"
              className={classes.offWhiteOne}
              component={Link}
              to="https://www.off---white.com/en-us/shopping/off-white-black-active-leggins-14916868"
            >
              <div
                className={classes.backShadow}
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White NRG
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  SS 2021
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.offWhiteTwo}
              to="https://www.off---white.com/en-us/shopping/off-white-spray-marker-s-s-t-shirt-16251605"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White 'Quotable' Collection
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2019
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.offWhiteThree}
              to="https://www.off---white.com/en-us/shopping/off-white-classic-industrial-belt-15281775"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White Belt
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  SS 2019
                </Grid>
              </div>
            </Grid>
          </Grid>
  
          <Grid
            className={classes.containerTwo}
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
          >
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilIkeaOne}
              to="https://www.off---white.com/en-us/shopping/man/homeware-bedding"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil Abloh x IKEA
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2019
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilIkeaTwo}
              to="https://www.off---white.com/en-us/shopping/man/homeware-furniture"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil x IKEA
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2019
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilIkeaThree}
              to="https://www.vitra.com/en-us/about-vitra/news/details/2020-virgil-abloh-vitra-2nd-drop"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil x IKEA
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2019
                </Grid>
              </div>
            </Grid>
          </Grid>
  
          <Grid
            className={classes.containerThree}
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
          >
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilLouisOne}
              to="https://us.louisvuitton.com/eng-us/magazine/articles/men-by-virgil-abloh#"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil x Louis Vuitton
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2020
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilLouisTwo}
              to="https://us.louisvuitton.com/eng-us/magazine/articles/men-by-virgil-abloh#"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil x Louis Vuitton
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  FW 2020
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilLouisThree}
              to="https://us.louisvuitton.com/eng-us/magazine/articles/men-by-virgil-abloh#"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Virgil x Louis Vuitton
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  January 2012
                </Grid>
              </div>
            </Grid>
          </Grid>
  
          <Grid
            className={classes.containerFour}
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
          >
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilNikeOne}
              to="https://stockx.com/air-jordan-1-retro-high-off-white-chicago"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White x Jordan Brand
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  SS 2018
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilNikeTwo}
              to="https://stockx.com/nike-air-max-90-off-white"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White x Nike
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  SS 2018
                </Grid>
              </div>
            </Grid>
  
            <Grid
              component={Link}
              item
              container
              direction="column"
              className={classes.virgilNikeThree}
              to="https://stockx.com/nike-dunk-low-off-white-pine-green"
            >
              <div
                style={{
                  background: "rgba(27, 20, 17, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid item className={classes.collectionTitle}>
                  Off-White x SB Dunks
                </Grid>
  
                <Grid item className={classes.collectionDate}>
                  SS 2020
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
  
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          className={classes.Footer}
        >
          <Grid
            container
            item
            justify="center"
            className={classes.logoMainContainer}
          >
            <Grid item className={classes.logoContainer}>
              <img className={classes.logo} alt="off-white" src={Logo} />
            </Grid>
          </Grid>
  
          <Grid
            container
            item
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            className={classes.linksContainer}
          >
            <Grid item className={classes.links} component={Link} to="/">
              Home
            </Grid>
            <Grid item className={classes.links} component={Link} to="/collection">
              Portfolio
            </Grid>
  
            <Grid item className={classes.links} component={Link} to="/about">
              About Us
            </Grid>
  
            <Grid item className={classes.links} component={Link} to="/contact">
              Contact
            </Grid>
          </Grid>
  
          <Grid container item className={classes.buttonMainContainer}>
            <Grid item className={classes.buttonContainer}>
              <Button variant="contained" className={classes.button}>
                See our Collection
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>       
    );
};

export default Collection;