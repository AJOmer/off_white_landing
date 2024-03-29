import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Button, Hidden, useTheme, useMediaQuery } from '@material-ui/core';

import heroCard from '../assets/about/desktop/virgil-hero.jpg';
import heroCardMobile from '../assets/about/desktop/virgil-hero.jpg';
import heroCardTab from '../assets/about/desktop/virgil-hero.jpg';
import heritage from '../assets/about/desktop/virgil-heritage.jpg';
import headShot from '../assets/about/desktop/offwhitebrand.jpg';
import headShot2 from '../assets/about/desktop/offwhitebrand.jpg';
import headShot3 from '../assets/about/desktop/virgil-headshot.jpg';
import headShot4 from '../assets/about/desktop/offwhitebrand.jpg';
import Logo from '../assets/offwhite.png';

const useStyles = makeStyles((theme) => ({
    aboutUs: {
      position: "absolute",
      top: "20%",
      left: "8%",
      width: "80%",
      [theme.breakpoints.up("lg")]:{
          width:'90%',
          margin:0
      },
      
      [theme.breakpoints.down("md")]: {
        left: 0,
        width: "100%",
        top: "13%",
      },
      [theme.breakpoints.down("sm")]: {
        left: 0,
        width: "100%",
        top: "10%",
      },
    },
    firstContainer: {
      backgroundImage: "url(" + heroCard + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50%",
      height: "38em",
      [theme.breakpoints.down("md")]: {
        backgroundImage: "url(" + heroCardTab + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "55em",
        margin: 0,
      },
      [theme.breakpoints.down("md")]: {
        backgroundImage: "url(" + heroCardMobile + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      },
    },
    aboutTitle: {
      fontSize: "10em",
      position: "absolute",
      bottom: "12em",
      left: "3.3em",
      zIndex: 1,
      fontFamily: "Spartan, sans-serif",
      fontWeight: 600,
      color: "#eeeff4",
      [theme.breakpoints.up('lg')]:{
        bottom:'13.0em',
        left:'3.8em'
    },
    [theme.breakpoints.down('lg')]:{
    },
      [theme.breakpoints.down("md")]: {
        fontSize: "7em",
        bottom: "22.7em",
        left: "4em",
        fontWeight: 600,
      },
    },
    textContainer: {
      width: "63%",
      height: "26em",
      background: "white",
      marginTop: "auto",
      marginLeft: "25.5em",
      [theme.breakpoints.down("md")]: {
        margin: 0,
        width: "80%",
        marginTop: "29em",
        marginLeft: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        width: "90%",
        marginTop: "29em",
        marginRight:'4em'
      },
    },
    textTitle: {
      width: "60%",
      marginTop: "5em",
      fontSize: "2em",
      margin: "0 auto",
      textAlign: "left",
      fontFamily: "Spartan, sans-serif",
      fontWeight: 600,
      [theme.breakpoints.down("md")]: {
        margin: 0,
        marginTop: "2em",
        fontSize: "2.2em",
      },
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        marginTop: "2em",
        fontSize: "2em",
        
        width:'80%',
        textAlign:'center'
      },
    },
    textSubtitle: {
      width: "60%",
      marginTop: "3em",
      textAlign: "left",
      fontSize: "1em",
      fontFamily: "Spartan, sans-serif",
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        width: "60%",
        fontSize: "1em",
        margin: 0,
        marginTop: "2em",
        lineHeight: 1.5,
      },
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        fontSize:'0.95em',
        
        width:'80%'
  
      },
    },
    secondContainer: {
      marginTop: "10em",
      [theme.breakpoints.up('lg')]:{
        marginBottom:'10em'
  
    },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        fontSize: "1em",
        margin: 0,
        marginTop: "15em",
      },
    },
    ourHeritage: {
      width: "50%",
      [theme.breakpoints.up('lg')]:{
    },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: "-5em",
        boxSizing: "border-box",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        boxSizing: "border-box",
          },
    },
    ourHeritageTitle: {
      fontSize: "4em",
      width: "60%",
      textAlign: "left",
      marginBottom: "1em",
      marginTop: "1.2em",
      fontFamily: "Spartan, sans-serif",
      fontWeight: 600,
      [theme.breakpoints.up('lg')]:{
        marginRight:'auto',
        margin:0
        
    },
      [theme.breakpoints.down("md")]: {
        width: "40%",
        fontSize: "4em",
        margin: 0,
        marginTop: "0.55em",
        textAlign: "left",
        marginRight: "7em",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        fontSize: "2em",
        margin: 0,
        
        textAlign:'center'
       
      },
    },
    ourHeritageSubTitle: {
      width: "70%",
      marginBottom: "1em",
      fontSize: "0.95em",
      fontFamily: "Spartan, sans-serif",
      color: "black",
      [theme.breakpoints.up('lg')]:{
        marginRight:'auto',
        fontSize: '1.3em'
    },
      [theme.breakpoints.down("md")]: {
        width: "80%",
        fontSize: "1.2em",
        margin: 0,
        marginTop: "1em",
        textAlign: "left",
        fontWeight: 500,
        marginRight: "4.5em",
        lineHeight: 1.3,
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        fontSize: "1.2em",
        margin: 0,
        marginTop: "1em",
        textAlign: "center",
        fontWeight: 500,
        lineHeight: 1.3,
        
      },
    },
    ourHeritageImgContainer: {
      [theme.breakpoints.down("md")]: {},
    },
    ourHeritageImg: {
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        width:'100%'
      },
    },
    thridContainer: {
      width: "100%",
      marginLeft: "5em",
      marginTop: "8em",
      [theme.breakpoints.up('lg')]:{
        margin:0,
        marginBottom:'10em'
  
    },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: 0,
        marginTop: "10em",
        marginBottom:'10em'
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: 0,
        marginTop: "5em",
        marginBottom:'10em',
        
      },
    },
    firstSection: {
      width: "100%",
      [theme.breakpoints.up('lg')]:{
    },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: 0,
        marginBottom:'2em',
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        margin: 0,
        marginBottom:'2em',
      
        marginLeft:'1em'
      },
    },
    theLeadersContainer: {
      width: "30%",
      
      [theme.breakpoints.up('lg')]:{
          marginLeft:"2em",
          width:'35.4%'
      },
      [theme.breakpoints.down("md")]: {
        width: "40%",
        marginBottom: "1em",
        marginLeft:'3em'
      },
      [theme.breakpoints.down("sm")]: {
        width: "55%",
        marginLeft:0,
        
        marginRight:'2em'
      },
    },
    theLeadersTitle: {
      fontSize: "3.6em",
      marginBottom: "5em",
      width: "25%",
      [theme.breakpoints.up('lg')]:{
        width:'35%',
        fontSize:'5em',
        margin:0,
        marginBottom:'4.4em'
    },
      [theme.breakpoints.down("md")]: {
        width: "30%",
        margin: 0,
        fontSize: "4em",
        textAlign: "left",
        marginBottom: "1em",
        marginRight: "5em",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        marginBottom: "1em",
        fontSize:'2em',
        
        textAlign:'center'
      },
    },
    mainLeaders: {
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: 0,
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        margin: 0,
        
        marginRight:'10em'
      },
    },
   
    theLeadersimg: {
      width: "100%",
      [theme.breakpoints.up('lg')]:{
    },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginBottom: "2em",
        height: "100%",
        margin: "0 auto",
      },
    },
    leadersName: {
      [theme.breakpoints.down("md")]: {
        fontSize: "2em",
        textAlign: "left",
        marginTop:'-1em'
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1em",
        textAlign:'center'
      },
    },
    leaderPosition: {
      [theme.breakpoints.down("md")]: {
        fontSize: "1.4em",
        textAlign: "left",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.85em",
        textAlign:'center'
      },
    },
  
    Footer: {
      background: "#EEEFF4",
      width: "85%",
      marginLeft: "5em",
      marginTop: "5em",
      [theme.breakpoints.up('lg')]:{
          margin:0,
          width:'90%'
      },
      [theme.breakpoints.down("md")]: {
        margin: 0,
        width: "100%",
        marginTop: "4em",
      },
    },
    logoMainContainer: {
      background: "black",
      width: "15%",
      boxSizing: "border-box",
      height: "12em",
      [theme.breakpoints.down("md")]: {
        width: "30%",
        position:'inherit',
        marginTop:'-6em'
      },
      [theme.breakpoints.down("sm")]: {
        width: "40%",
        position:'inherit',
        marginTop:'-5em',
        height:'10em'
      },
    },
    logoContainer: {
      [theme.breakpoints.down("md")]: {
      },
    },
    logo: {
      marginTop: "4em",
    },
    linksCOntainer: {
      width: "60%",
      marginLeft: "3em",
      marginTop: "2em",
      [theme.breakpoints.down("md")]: {
        margin: 0,
        marginLeft: "1em",
        width: "70%",
        marginBottom:'2em',
        marginTop:"3em"
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
      left: "81%",
      [theme.breakpoints.up('lg')]:{
          left:'70%'
      },
      [theme.breakpoints.down("md")]: {
        width: "17%",
        left: "68%",
        position:'static'
        
      },
    },
    buttonContainer: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1em",
        width: "100%",
      },
    },
    button: {
      color: "white",
      background: "black",
      fontFamily: "Spartan, sans-serif",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.55em",
      },
    },
  
    mobileStepper: {
      marginTop: "4.8em",
      background: "#EEEFF4",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
  }));


  const AboutUs = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <Grid container direction="column" className={classes.aboutUs}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.firstContainer}
        >
          <Hidden smDown>
            <Grid item className={classes.aboutTitle}>
              About
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.textContainer}
          >
            <Grid item className={classes.textTitle}>
              The roots of the creator
            </Grid>
            <Grid item className={classes.textSubtitle}>
            Abloh was born in Rockford, Illinois, on September 30, 1980. His parents were immigrants from Ghana, and his mother was a seamstress, while his father was the manager of a paint company. According to a previous article by Friedman, it was Abloh's mother who taught him how to sew. 
            </Grid>
          </Grid>
        </Grid>
  
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.secondContainer}
        >
          <Grid
            item
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            className={classes.ourHeritage}
          >
            <Grid item className={classes.ourHeritageTitle}>
              {" "}
              Our Heritage
            </Grid>
            <Grid item className={classes.ourHeritageSubTitle}>
              {" "}
              Abloh is regarded as one of the pioneers of high-end street fashion, or what he has called the "post-streetwear movement," with roots in the classic streetwear that originated in hip-hop and skating culture.
            </Grid>
            <Grid item className={classes.ourHeritageSubTitle}>
              {" "}
              When the lines between luxury and streetwear were torn down, Abloh's influence was everywhere, from Balenciaga selling puffer jackets to Dior collaborating with Nike on limited edition Air Jordans to Louis Vuitton partnering with Supreme to Gucci working with legendary Harlem designer Dapper Dan.{" "}
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.ourHeritageImgContainer}>
              <img className={classes.ourHeritageImg} alt="" src={heritage} />
            </Grid>
          </Hidden>
        </Grid>
  
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify="space-between"
          className={classes.thridContainer}
        >
          <Grid item className={classes.theLeadersTitle}>
            The Visionary
          </Grid>
  
          <Grid item className={classes.mainLeaders}>
            <Grid
              item
              direction="column"
              alignItems="center"
              container
              style={{ width: "100%" }}
            >
              <Grid
                className={classes.firstSection}
                item
                direction={matchesMD ? null : "row"}
                justify={matchesMD ? null : "flex-end"}
                alignItems="center"
                style={{display: matchesSM ? 'flex' : null, flexDirection: matchesSM ? 'column' : null}}
                container
              >
                <Grid
                  className={classes.theLeadersContainer}
                  item
                  direction="column"
                  style={{marginLeft: matchesSM ? '3.8em': null}}
  
                  container
                >
                  <Grid item className={classes.theLeadersImgContainer}>
                    <img
                      className={classes.theLeadersimg}
                      alt="avatar of richards"
                      src={headShot}
                    />
                  </Grid>
                </Grid>
  
                <Grid
                  className={classes.theLeadersContainer}
                  item
                  direction="column"
                  style={{marginLeft: matchesSM ? '3.8em': null}}
  
                  container
                >
                  <Grid item className={classes.theLeadersImgContainer}>
                    <img
                      className={classes.theLeadersimg}
                      alt="avatar of richards"
                      src={headShot2}
                    />
                  </Grid>
                </Grid>
              </Grid>
  
              <Grid
                className={classes.firstSection}
                item
                direction={matchesMD ? null : "row"}
                justify={matchesMD ? null : "flex-end"}
                style={{display: matchesSM ? 'flex' : null, flexDirection: matchesSM ? 'column' : null}}
  
                container
              >
                <Grid
                  className={classes.theLeadersContainer}
                  item
                  direction="column"
                  style={{marginLeft: matchesSM ? '5.5em': null}}
  
                  container
                >
                  <Grid item className={classes.theLeadersImgContainer}>
                    <img
                      className={classes.theLeadersimg}
                      alt="avatar of richards"
                      src={headShot3}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{marginTop:matchesMD ? '0.25em' : null}}
                    className={classes.leadersName}
                  >
                    Virgil Abloh
                  </Grid>
                  <Grid item className={classes.leaderPosition}>
                    Creative Director
                  </Grid>
                </Grid>
  
                <Grid
                  className={classes.theLeadersContainer}
                  item
                  direction="column"
                  alignItems='center'
                  style={{marginLeft: matchesSM ? '5.5em': null}}
                  container
                >
                  <Grid item className={classes.theLeadersImgContainer}>
                    <img
                      className={classes.theLeadersimg}
                      alt="avatar of richards"
                      src={headShot4}
                    />
                  </Grid>
                </Grid>
              </Grid>
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
              <img className={classes.logo} alt="arch logo in white" src={Logo} />
            </Grid>
          </Grid>
  
          <Grid
            container
            item
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            className={classes.linksCOntainer}
          >
            <Grid
              item
              className={classes.links}
              component={Link}
              to="/"
              onClick={props.homeLink}
            >
              Home
            </Grid>
            <Grid
              item
              className={classes.links}
              component={Link}
              to="/collection"
              onClick={props.collectionLink}
            >
              Collection
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
                See the Collection
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  
  export default AboutUs;