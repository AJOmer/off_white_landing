import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Grid, makeStyles, Tabs, Tab, useTheme, useMediaQuery, IconButton, Hidden, AppBar, Toolbar, Button
} from '@material-ui/core';
import Logo from '../../assets/offwhite.png';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    Nav: {
        marginBottom: '30em',
        [theme.breakpoints.down('md')]:{
            width: "90%",
            border:'solid 2px green'
          
        },
        [theme.breakpoints.down('sm')]:{
            width: "100%",
          
        }
    },
    logo: {
        marginRight: "3em",
        [theme.breakpoints.down('md')]:{
          marginLeft:'3em',
          marginTop:'1em'
        }
    },
    linksContainer: {
        width: "100%",
        [theme.breakpoints.down('md')]:{
          marginLeft:'3em',
          marginTop:'1em'
    
        }
      },
      links: {
        fontFamily: "Spartan, sans-serif",
        fontWeight: 600,
        fontSize: "0.75em",
        "&:hover": {
          color: "#7D828F",
        },
      },
      lineContainer: {
        width: "100%",
        marginRight: "3em",
        [theme.breakpoints.down('md')]:{
          width: "100%",
        
        },
      },
      lineHome: {
        lineHeight: 1,
        marginBottom: "2em",
        opacity: "40%",
      },
      letters: {
        opacity: "30%",
        fontWeight: 700,
        fontFamily: "Spartan, sans-serif",
        marginBottom: "0.55em",
      },
      containerOne: {
        width: "8%",
        [theme.breakpoints.down('md')]:{
          width: "100%",
        
        },
      },
      containerTwo: {
        width: "60%",
        marginBottom: "6em",
        [theme.breakpoints.up('lg')]:{
            width:'70%'
        },
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
      portNav: {
        marginBottom: "120em",
        [theme.breakpoints.down('md')]:{
          width: "100%",
        
        }
      },
      portImgContainer: {},
      portLogo: {
        marginRight: "3em",
        [theme.breakpoints.down('md')]:{
          marginLeft:'3em',
          marginTop:'1em'
        }
      },
      portLinksContainer: {
        width: "80%",
        [theme.breakpoints.down('md')]:{
          marginLeft:'3em',
          marginTop:'1em',
        }
      },
      portLinks: {
        fontFamily: "Spartan, sans-serif",
        fontWeight: 600,
        fontSize: "0.75em",
        "&:hover": {
          color: "#7D828F",
        },
      },
      portLineContainer: {
        width: "100%",
        marginRight: "3em",
      },
      portLineHome: {
        lineHeight: 1,
        marginBottom: "2em",
        opacity: "40%",
      },
      portLetters: {
        opacity: "30%",
        fontWeight: 700,
        fontFamily: "Spartan, sans-serif",
        marginBottom: "0.55em",
      },
      portContainerOne: {
        width: "8%",
      },
      portContainerTwo: {
        width: "60%",
        marginBottom: "5em",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
      appbar:{
      }   
}));

const navLinks = [
    {id: 1, label: 'Home', link: '/', values: '/'},
    {id: 2, label: 'Collection', link: '/collection', values: '/collection'},
    {id: 3, label: 'About Us', link: '/about', values: '/about'},
    {id: 4, label: 'Contact', link: '/contact', values: '/contact'}
    // difference in /contact and contact in original app \\
];

const Navbar = () => {
    const classes = useStyles();
    const useLocationPath = useLocation().pathname;
    const routes = ['/', '/collection', '/about', '/contact'];
    const [value, setValue] = useState(0);
    const [switchNav, setSwitch] = useState(false)
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    
    const handleValue = (e, newVal) => {
        setValue(newVal)
    }

    const navSwitch = () => {
        setSwitch(true)
    }

    const navSwitchBack = () => {
        setSwitch(false)
    }

    useEffect(() => {
        switch (window.location.pathname){
            case '/':
                if(value !== 0){
                    setValue(0);
                }
                break;
            case '/collection':
                if(value !== 1){
                    setValue(1);
                }
                break;
            case '/about':
                if(value !== 2){
                    setValue(2);
                }
                break;
            case '/contact':
                if(value !== 3){
                    setValue(3)
                }
                break;
                default:
                    break;
        }
    }, [value]);

    const deskTopNavbar = (
        <React.Fragment>
            <Grid
            className={classes.linksContainer}
            item
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            >
                <Tabs
                TabIndicatorProps={{
                    style: {
                        width: '12%',
                        marginLeft: '2.5em',
                        color: '#eeeff4'
                    },
                }}
                value={value}
                onChange={handleValue}
                style = {{ width: '100%'}}
                >
                   {navLinks.map((link) => (
                       <Tab
                            className={classes.links}
                            key={link.id}
                            component={Link}
                            label={link.label}
                            to={link.link}
                       />
                   ))} 
                </Tabs>
            </Grid>
        </React.Fragment>
    );

    const mobileNav = (
        <React.Fragment>
            <AppBar className={classes.appbar} style={{background: 'white'}}>
                <Toolbar>
                    <Grid
                        item
                        container
                        direction='row'
                        justify='space-between'
                        style={{width:'100%', padding: '1%'}}
                        className={classes.mobileNav}
                    >
                        <Grid item className={classes.imgMobile} style={{margin: 0, padding: 0, marginTop: '0.45em'}}>
                            <img style={{margin: 0, width: '5em'}} className={classes.logoMobile} alt="logo" src={Logo}/>
                        </Grid>

                        <Grid item>
                            {switchNav ? (
                                <Grid container direction='column' className={classes.linksContainer}>
                                    <Grid item>
                                    <Button onClick={navSwitchBack}>X</Button>
                                    </Grid>
                                <Grid className={classes.mobileLinksContainer} item container direction='column' style={{position:'absolute', top:'100%', left:'30%', width:'70%',  background:'#eeeff4'}}>
                                    <Grid className={classes.mobileLinks} item component={Link} to='/' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Home</Button></Grid>
                                    <Grid className={classes.mobileLinks}  item component={Link} to='/collection' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Collection</Button></Grid>
                                    <Grid className={classes.mobileLinks}  item component={Link} to='/about' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>About Us</Button></Grid>
                                    <Grid className={classes.mobileLinks}  item component={Link} to='/contact' style={{color:'black',  textDecoration:'none'}} onClick={navSwitchBack}><Button style={{width:'100%', borderRadius:0}}>Contact</Button></Grid>
                                </Grid>
                                </Grid>
                            ) : (
                                <IconButton onClick={navSwitch}>
                                    <MenuIcon/>
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );

    return (
        <div>
        {console.log(
          useLocationPath === routes[1]
            ? useLocationPath === routes[2]
            : useLocationPath === routes[3]
            ? useLocationPath === routes[2]
            : useLocationPath === routes[1]
        )}
        {useLocationPath === routes[1] ? (
          <Grid
            className={classes.portNav}
            container
            direction="row"
            alignItems="center"
          >
            <Grid container item className={classes.portContainerOne}>
              <Hidden mdDown>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.portLineContainer}
                >
                  <Grid item className={classes.portLineHome}>
                    |
                    <br /> |
                    <br /> |
                    <br /> |
                    <br /> |
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    O
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    F
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    F
                  </Grid>
                   
                  <Grid item className={classes.portLetters}>
                    W
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    H
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    I
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    T
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    E
                  </Grid>
                 
  
                 
  
                </Grid>
              </Hidden>
            </Grid>
  
            <Grid direction={matchesSM ? "row" : null}
              justify={matchesSM ? "space-between" : null} item container className={classes.portContainerTwo}>
              <Grid item className={classes.portImgContainer}>
                <img className={classes.portLogo} alt="logo" src={Logo} />
              </Grid>
              <Grid item>{matchesSM ? mobileNav : deskTopNavbar}</Grid>
            </Grid>
          </Grid>
        ) : (
          
          <Grid
            className={classes.Nav}
            container
            direction="row"
            alignItems="center"
          >
            <Grid container item className={classes.containerOne}>
              <Hidden mdDown>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.lineContainer}
                >
                  <Grid item className={classes.lineHome}>
                    |
                    <br /> |
                    <br /> |
                    <br /> |
                    <br /> |
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    O
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    F
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    F
                  </Grid>
  
                  <Grid item className={classes.portLetters}>
                    W
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    H
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    I
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    T
                  </Grid>
                  <Grid item className={classes.portLetters}>
                    E
                  </Grid>
                 
  
                
  
                  
             
                </Grid>
              </Hidden>
            </Grid>
            
            <Grid
              item
              container
              direction={matchesSM ? "row" : null}
              justify={matchesSM ? "space-between" : null}
              className={classes.containerTwo}
            >
              <Hidden smDown>
              <Grid item className={classes.imgContainer}>
                <img className={classes.logo} alt="logo" src={Logo} />
              </Grid>
              </Hidden>
              
  
                <Grid item>{matchesSM ? mobileNav : deskTopNavbar}</Grid>
             
            </Grid>
          </Grid>
          
        )}
      </div>       
    );
};

export default Navbar;