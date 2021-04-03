import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    makeStyles, Grid, Button, MobileStepper, useTheme, Hidden, useMediaQuery
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Logo from '../assets/offwhite.png';

// DESKTOP ASSETS \\
import welcome from '../assets/home/desktop/image-welcome.jpg';
import smallTeam from '../assets/home/desktop/image-small-team.jpg';
import homeDecor from '../assets/home/desktop/image-hero-home.jpg';
import racers from '../assets/home/desktop/image-hero-racers.jpg';
import temperature from '../assets/home/desktop/image-hero-temperature.jpg';
import bags from '../assets/home/desktop/image-hero-bags.jpg';
import sculpture from '../assets/collection/desktop/sculpture.jpg';
import shirtOff from '../assets/collection/desktop/shirtoff.jpg';
import nikeOff from '../assets/collection/desktop/nikeoff.jpg';

// TABLET ASSETS \\
import homeDecorTab from '../assets/home/tablet/image-hero-home.jpg';
import smallTeamTab from '../assets/home/tablet/image-small-team.jpg';
import sculptureTab from '../assets/collection/tablet/sculpture.jpg';
import shirtOffTab from '../assets/collection/tablet/shirtoff.jpg';
import nikeOffTab from '../assets/collection/tablet/nikeoff.jpg';


// MOBILE ASSETS \\
import homeDecorMobile from '../assets/home/mobile/image-hero-home.jpg';
import smallTeamMobile from '../assets/home/mobile/image-small-team.jpg';
import sculptureMobile from '../assets/collection/mobile/sculpture.jpg';
import shirtOffMobile from '../assets/collection/mobile/shirtoff.jpg';
import nikeOffMobile from '../assets/collection/mobile/nikeoff.jpg';

const heroCards = [
    {
        label: " IKEA x Virgil Abloh",
        img: homeDecor,
        text:
          "  MARKERAD, a limited edition collection designed in collaboration with world-renowned creative Virgil Abloh. Together we’ve updated a range of everyday objects – from clocks to chairs – with the kind of striking style that can help any home stand out.",
      },
      {
        label: "Off-White SB Dunks",
        img: racers,
        text:
          " Virgil Abloh pays homage to skate culture’s adoption of 1980’s Nike Basketball silhouettes with the Nike Dunk Low Off-White.",
      },
      {
        label: "Off-White Clothing",
        img: temperature,
        text:
          " Discover Virgil Abloh's take on street fashion. Off-White has been defining the grey area between black and white since 2013, and has become an iconic brand.",
      },
      {
        label: "Louis Vuitton x Virgil Abloh",
        img: bags,
        text:
          " Louis Vuitton is delighted to welcome Virgil Abloh as its new Men's Artistic Director.",
      },
];

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop:'-36em',
        [theme.breakpoints.down('md')]:{
          width: "100%",
          marginTop:'-35em'
        
        },
        [theme.breakpoints.down('sm')]:{
          width: "100%",
          marginTop:'-35.3em',
        
        }
      },
      homepage: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "78em",
        backgroundPositionY: "5%",
        width: "80%",
        
        marginLeft:'7em',
        [theme.breakpoints.down("md")]: {
          width: "100%",
         margin:0,
          backgroundSize: "87em",
          backgroundImage:'url(' + homeDecorTab + ')'
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
         margin:0,
          backgroundSize: "60em",
          backgroundImage:'url(' + homeDecorMobile + ')',
          height:'26em',
    
        },
      },
      headerTitle: {
        width: "35%",
        textAlign: "left",
        marginTop: "2em",
        color: "white",
        fontSize: "3.5em",
        fontWeight: 700,
        marginLeft: "3.4em",
        marginBottom: "0.15em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          fontSize: "3.2em",
          marginTop: "2em",
          marginLeft: "2em",
        },
      },
      headerSubtitle: {
        width: "30%",
        textAlign: "left",
        color: "white",
        marginLeft: "16em",
        fontSize: "0.75em",
        marginBottom: "0.85em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          fontSize: "0.96em",
          marginTop: "1em",
          marginLeft: "6.2em",
          width: "65%",
        },
      },
      headerButtonContainer: {
        width: "30%",
        textAlign: "left",
        marginLeft: "12em",
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          fontSize: "0.96em",
          marginTop: "2em",
          marginLeft: "6.2em",
          width: "65%",
        },
      },
      headerButton: {
        background: "black",
        color: "white",
        fontSize: "0.75em",
      },
      buttonGroupContainer: {
        width: "30%",
        textAlign: "left",
        position: "absolute",
        top: "92.5%",
        left: "-5%",
      },
      buttonGroup: {},
      buttonGroupButtons: {
        background: "#EEEFF4",
        color: "black",
        borderRadius: 0,
        "&:hover": {
          background: "#EEEFF4",
          color: "black",
        },
    
      },
      mainWelcome: {
        width: "80%",
        
        marginTop:'6em',
        marginLeft:'7em',
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          height:"25em"
        },
      },
      welcomeTitle: {
        fontSize: "9.5em",
        width: "60%",
        marginBottom:'-2em',
        color: "#EEEFF4",
        fontFamily: "Spartan, sans-serif",
        fontWeight: 900,
        zIndex:1
      },
      welcomeToOffWhiteContainer: {
        width: "100%",
        margin: "0 auto",
      },
      offWhiteContainer: {
        width: "40%",
        zIndex: 1,
        marginLeft:'8em',
        marginTop:'10em',
        height:'35em',
        
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          height:'35em',
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          height:'29em'
        },
      },
      offWhiteTitle: {
        textAlign: "center",
        fontSize: "3em",
        fontWeight: 500,
        width: "80%",
        margin: "0 auto",
        marginTop:'1em',
        marginBottom: "1.91em",
        
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "100%",
          marginTop:'1em',
          fontSize:'3.5em',
          textAlign:'center'
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0 auto",
          width: "75%",
          fontSize: "2em",
          textAlign: "center",
          marginTop:'1em'
          
        },
        
      },
      offWhiteSubtitle: {
        textAlign: "center",
        width: "95%",
        margin: "0 auto",
        fontSize: "1em",
        marginBottom: "1em",
        
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "68%",
          marginTop:'1.5em',
          fontSize:'1em'
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0.15em auto",
          width: "75%",
          fontSize:'0.95em'
        },
      },
      imgContainer: {
        width:'40%',
        height:'100%',
        
        [theme.breakpoints.down('md')]:{
          width: "100%",
        
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
        },
      },
      img: {
        width: "100%",
        height:'100%'
      },
      smallTeam: {
        background: "url(" + smallTeam + ")",
        backgroundRepeat: "no-repeat",
        width: "80%",
        marginLeft: "7em",
        marginTop: "7em",
        height: "35em",
        backgroundSize:'100%',
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "100%",
          backgroundSize: "100%",
          backgroundPositionY:'-10em',
          marginTop:'3em',
          background: "url(" + smallTeamTab + ")",
          backgroundRepeat:'no-repeat'
    
          
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          height: "20em",
          marginTop:'10em',
          background: "url(" + smallTeamMobile + ")",
    
        },
      },
      smallTeamTitle: {
        marginTop: "0.9em",
        color: "white",
        fontSize: "4.5em",
        textAlign: "center",
        width: "60%",
        marginLeft: "3.5em",
        fontFamily: "Spartan, sans-serif",
        fontWeight: 500,
        
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "50%",
          fontSize:'4em',
          marginTop:'2em'
      
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0 auto",
          width: "65%",
          fontSize: "2.2em",
          marginTop: "2em",
          marginBottom: "1em",
        },
      },
      smallTeamButtonContainer: {
        textAlign: "center",
        marginLeft: "22em",
        width: "45%",
        marginTop: "1em",
       
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "50%",
          fontSize:'1em',
          marginTop:'2em'
      
        },
        [theme.breakpoints.down("sm")]: {
          margin: "0 auto",
          width: "70%",
        },
      },
      smallTeamButton: {
        background: "black",
        color: "white",
        fontFamily: "Spartan, sans-serif",
        fontWeight: 500,
        width:'60%',
        fontSize:'1em',
        '&:hover':{
            background:'eeeff4',
            color:"black",
        }
      },
      featureMainContainer: {
        width: "80%",
        marginLeft: "7em",
        marginTop: "6em",
        marginBottom: "5em",
        
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "100%",
          marginTop: "5em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
        },
      },
      featureContainer: {
        width: "100%",
        
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "80%",
          marginTop: "2em",
        },
      },
      
      // SWITCH UP \\
      featureNikeOffContainer: {
        width: "30%",
        backgroundImage: "url(" + nikeOff + ")",
        backgroundRepeat: "no-repeat",
        height: "33em",
        marginRight: "3.4em",
        backgroundSize:'100%',
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.4s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
          border: "1px solid #cccccc",
        },
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "70%",
          backgroundSize:'100%',
          marginBottom:'2em',
          backgroundImage: "url(" + nikeOffTab + ")",
          height:'19em',
          backgroundRepeat:'no-repeat'
        },
        [theme.breakpoints.down("sm")]: {
          width: "79%",
          margin: "0.95em auto",
          height: "15em",
          backgroundImage: "url(" + nikeOffMobile + ")",
    
        },
        
      },
      featureSculptureImgContainer: {
        width: "30%",
        backgroundImage: "url(" + sculpture + ")",
        backgroundRepeat: "no-repeat",
        marginRight: "3.4em",
        backgroundSize:'100%',
        height:'33em',
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.4s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
          border: "1px solid #cccccc",
        },
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "70%",
          backgroundSize:'100%',
          marginBottom:'2em',
          backgroundImage: "url(" + sculptureTab + ")",
          height: "19em",
        },
        [theme.breakpoints.down("sm")]: {
          width: "79%",
          margin: "0.95em auto",
          backgroundImage: "url(" + sculptureMobile + ")",
          height: "15em",
    
        },
      },
      featureShirtOffContainer: {
        width: "30%",
        backgroundImage: "url(" + shirtOff + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize:'100%',
        height:'33em',
        '&:hover':{
          transform: "translateY(-15px)",
          transition: "all 0.4s ease-out",
          box: "0px 4px 8px rgba(38, 38, 38, 0.2)",
          top: "-4px",
          border: "1px solid #cccccc",
        },        
        [theme.breakpoints.down("md")]: {
          margin: '0 auto',
          width: "70%",
          backgroundSize:'100%',
          backgroundImage: "url(" + shirtOffTab + ")",
          height: "19em",
        },
        [theme.breakpoints.down("sm")]: {
          width: "79%",
          margin: "0.95em auto",
          height: "15em",
          backgroundImage: "url(" + shirtOffMobile + ")",
    
        },
      },
      // featuresTitle: {
      //   color: "white",
      //   marginTop: "18em",
      //   fontWeight: 600,
      //   textAlign: "left",
      //   marginLeft: "2em",
      //   fontFamily: "Spartan, sans-serif",
      //   [theme.breakpoints.down("md")]: {
      //     width: "80%",
      //     margin:0,
      //     marginTop:'2em',
      //     marginLeft:'2em',
      //     fontSize:'1.5em'
      //   },
      //   [theme.breakpoints.down("sm")]: {
      //     width: "80%",
      //     fontSize: "1.5em",
      //     marginLeft:'1em',
      //     margin:0
      //   },
      // },
      // featuresLinks: {
      //   color: "white",
    
      //   textAlign: "left",
      //   marginLeft: "1.3em",
      //   fontFamily: "Spartan, sans-serif",
      //   fontSize: "0.9em",
      //   [theme.breakpoints.down("md")]: {
      //     width: "80%",
      //     margin: "0em auto",
      //     marginLeft:'2.3em',
      //     fontSize:'1em'
      //   },
      //   [theme.breakpoints.down("sm")]: {
      //     width: "80%",
      //     margin: "0em auto",
      //     marginLeft:'4.8em'
      //   },
      // },
      numberOne: {
        color: "white",
        fontFamily: "Spartan, sans-serif",
        fontSize: "8em",
        fontWeight: 600,
        marginTop: "0.15em",
        opacity: "40%",
        marginLeft: "1.9em",
        textAlign:'right',
        [theme.breakpoints.down("md")]: {
          width: "20%",
          margin: "0em auto",
          marginLeft:'4.5em',
    
        },
        [theme.breakpoints.down("sm")]: {
          width: "20%",
          margin: "0em auto",
          marginLeft:'1.9em',
        },
      },
      numberTwo: {
        color: "white",
        fontFamily: "Spartan, sans-serif",
        fontSize: "8em",
        fontWeight: 600,
        marginTop: "0.15em",
        opacity: "40%",
        marginLeft: "1.55em",
        textAlign:'right',
    
        [theme.breakpoints.down("md")]: {
          width: "20%",
          margin: "0em auto",
          marginLeft:'4.5em',
    
        },
        [theme.breakpoints.down("sm")]: {
          width: "30%",
          margin: "0em auto",
          marginLeft:'1.8em',
    
        },
      },
      numberThree: {
        color: "white",
        fontFamily: "Spartan, sans-serif",
        fontSize: "8em",
        fontWeight: 600,
        marginTop: "0.15em",
        opacity: "40%",
        marginLeft: "1.6em",
        textAlign:'right',
        [theme.breakpoints.down("md")]: {
          width: "20%",
          margin: "0em auto",
          marginLeft:'4.5em',
    
        },
        [theme.breakpoints.down("sm")]: {
          width: "30%",
          margin: "0em auto",
          marginLeft:'1.8em',
    
        },
      },
      featureHeader: {
        fontSize: "2.5em",
        fontFamily: "Spartan, sans-serif",
        fontWeight: 600,
        marginTop: "0.55em",
        marginBottom: "0.55em",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.5em",
        },
      },
      featureButtonContained: {
        [theme.breakpoints.down("sm")]: {},
      },
      featureButton: {
        background: "black",
        color: "white",
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.75em",
        },
      },
      portCards: {},
      Footer: {
        background: "#EEEFF4",
        width: "72%",
        marginLeft: "13em",
        marginTop: "5em",
        [theme.breakpoints.down('md')]:{
          width: "100%",
          margin:0,
          marginTop:'10em',
          height:'20em'
        },
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
        [theme.breakpoints.down("md")]: {
          margin: 0,
          width: "20%",
          marginTop: "-5em",
          height: "10em",
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "30%",
          position: "inherit",
          marginTop: "-3em",
          height: "8em",
        },
      },
      logoContainer: {
        [theme.breakpoints.down("sm")]: {
          margin: 0,
        },
      },
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
        
        [theme.breakpoints.down("md")]: {
          width: "50%",
          margin:'1em auto',
          textAlign:'center'
          
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          marginTop: "0.35em",
          marginBottom: "0em",
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
        textDecoration:'none',
        color:'black',
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          textAlign: "center",
        },
      },
      buttonMainContainer: {
        width: "20%",
        position: "inherit",
        left: "73%",
        [theme.breakpoints.down("md")]: {
          width: "50%",
          margin:'0 auto',
          textAlign:'center'
          
        },
        [theme.breakpoints.down("sm")]: {
          margin: 0,
          width: "100%",
          textAlign: "center",
          marginTop: "1em",
          left: 0,
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
      mobileStepperContainer:{
        
        width:'80%',
        margin:'0 auto',
        marginLeft:'7em'
      },
    
      mobileStepper: {
        background: "#EEEFF4",
        
        [theme.breakpoints.down("sm")]: {
          margin: 0,
        },
      },
    }));

    const HomePage = () => {
        const classes = useStyles();
        const theme = useTheme();
        const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
        const [activeButton, setActiveButton] = useState(0);
        const maxStep = heroCards.length;

        const handleNext = () => {
            setActiveButton((prevActive) => prevActive + 1);
        };
        
          const handleBack = () => {
            setActiveButton((prevActive) => prevActive - 1);
        };

        return (
            <div className={classes.mainContainer}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems='center'
        className={classes.homepage}
        style={{ backgroundImage: "url(" + heroCards[activeButton].img + ")" }}
      >
        <div
          style={{
            background: "rgba(27, 20, 17, 0.4)",
            height: "30em",
            width: "100%",
          }}
        >
          <Grid item className={classes.headerTitle}>
            {heroCards[activeButton].label}
          </Grid>

          <Grid item className={classes.headerSubtitle}>
            {heroCards[activeButton].text}
          </Grid>

          <Grid item className={classes.headerButtonContainer}>
            <Button
              
              variant="contained"
              className={classes.headerButton}
              component={Link}
              to="/collection"
            >
              Preview the Collection <ArrowRightAltIcon style={{ fill: "#FFF" }} />
            </Button>
          </Grid>
         
        </div>
      </Grid>
      <Grid item className={classes.mobileStepperContainer}>
            <Hidden mdDown>
              <MobileStepper
                className={classes.mobileStepper}
                steps={maxStep}
                position="static"
                variant="dots"
                activeStep={activeButton}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeButton === maxStep - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeButton === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    back
                  </Button>
                }
              />
            </Hidden>
          </Grid>
      

      <Grid container className={classes.mainWelcome}>
        <Hidden mdDown>
          <Grid item className={classes.welcomeTitle}>
            Welcome
          </Grid>
        </Hidden>

        <Grid
          container
          direction="row"
          justify='space-between'
          alignItems='center'
          className={classes.welcomeToOffWhiteContainer}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.offWhiteContainer}
          >
            <Grid item className={classes.offWhiteTitle}>
              Welcome to Off-White
            </Grid>

            <Grid item className={classes.offWhiteSubtitle}>
            OFF-WHITE c/o VIRGIL ABLOH™ is a fashion label rooted in current culture at a taste-level particular to now. With a specific opinion and not necessarily same with vision seasonal men's and women's collections are offered.
            </Grid>
            <Grid item className={classes.offWhiteSubtitle}>
            There is a product offering of the brand also in the realm of furniture and ready made goods to further reinforce an approach to lifestyle.
            </Grid>

            <Grid item className={classes.offWhiteSubtitle}>
            Manufacturing is based in Milan with a core value of the brand to be made from the best available and particular opinion regarding fabric, fit and fabrication.
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.imgContainer}>
              <img alt="welcome pic" className={classes.img} src={welcome} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>

      <Grid container direction="column" className={classes.smallTeam}>
        <div
          style={{
            background: "rgba(27, 20, 17, 0.3)",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid item className={classes.smallTeamTitle}>
            One Visionary, Infinite Designs
          </Grid>

          <Grid item className={classes.smallTeamButtonContainer}>
            <Button variant="contained" className={classes.smallTeamButton} component={Link} to="/about">
              About Virgil <ArrowRightAltIcon />
            </Button>
          </Grid>
        </div>
      </Grid>

      <Grid
        className={classes.featureMainContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.featureContainer}
        >
          <Grid item className={classes.featureHeader}>
            Featured
          </Grid>

          <Grid item className={classes.featureButtonContained}>
            <Button
              
              variant="contained"
              className={classes.featureButton}
              component={Link}
              to="/collection"
            >
              See All <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.portcards}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.featureNikeOffContainer}
            component={Link} to="/collection"
          >
            <div
              style={{
                background: "rgba(27, 20, 17, 0.3)",
                height: "100%",
                width: "100%",
              }}
            >
              <Grid item className={classes.numberOne}>
                1
              </Grid>
            </div>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.featureSculptureImgContainer}
            component={Link} to="/collection"
          >
            <div
              style={{
                background: "rgba(27, 20, 17, 0.3)",
                height: "100%",
                width: "100%",
              }}
            >
              <Grid item className={classes.numberTwo}>
                2
              </Grid>
            </div>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.featureShirtOffContainer}
            component={Link} to="/collection"
          >
            <div
              style={{
                background: "rgba(27, 20, 17, 0.3)",
                height: "100%",
                width: "100%",
              }}
            >
              <Grid item className={classes.numberThree}>
                3
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
            <img className={classes.logo} alt="offWhite logo" src={Logo} />
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          className={classes.linksContainer}
        >
          <Grid
            item
            className={classes.links}
            component={Link}
            to="/"
          >
            Home
          </Grid>
          <Grid
            item
            className={classes.links}
            component={Link}
            to="/collection"
            
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
              See our Collection
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
};

export default HomePage;