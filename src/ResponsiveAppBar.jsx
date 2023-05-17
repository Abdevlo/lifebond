import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Carousel } from '@trendyol-js/react-carousel';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import './App.css';
import logo from './assets/logo.png'
import Card from '@mui/material/Card';
import Close from '@mui/icons-material/Close';
import { hover } from '@testing-library/user-event/dist/hover';

const pages = ['Home', 'Testimonials', 'About'];
const tagNames = ["Register Account", " Login Account", " Create Profile", " View Profile"];
const headerInfoEnglish = ["We strive to be the Best Non Profit Matrimony Service Provider to the Sri lankan Muslim Community worldwide"]
const headerInfoTamil = ["உலகெங்கிலும் உள்ள இலங்கை முஸ்லிம் சமூகத்திற்கு இலாப நோக்கற்ற சிறந்த திருமண சேவை வழங்குனராக இருக்க நாங்கள் முயற்சிக்கிறோம்"]
const testimonialData = [
  {
    testimonialTitle: "Testimonial 1",
    testimonialInfo: "We are so grateful to the matrimonial service for bringing us together. It was love at first sight when we saw each other's profiles, and the service made it easy for us to connect and start our journey together. The platform's user-friendly interface and comprehensive matching algorithms helped us find our perfect match. Now we are happily married and looking forward to a blissful future together!",
  },
  {
    testimonialTitle: "Testimonial 2",
    testimonialInfo: "I was hesitant at first to try a matrimonial service, but I'm glad I did. The service exceeded my expectations with its wide database of eligible profiles and advanced search filters. I was able to find a compatible partner who shares the same values and interests as me. The service provided a safe and secure platform for communication, and the customer support was excellent. I highly recommend it to anyone looking for a life partner!",
  },
  {
    testimonialTitle: "Testimonial 3",
    testimonialInfo: "We owe our happiness to the matrimonial service. We both had almost given up on finding a compatible partner until we joined the service. The service's personalized matchmaking approach and attention to detail helped us find each other. The service's thorough background checks and verification process gave us peace of mind, and we felt confident in our decision to take the next step. We are now happily married and grateful for the service's role in our love story!",
  },
  {
    testimonialTitle: "Testimonial 4",
    testimonialInfo: "I can't thank the matrimonial service enough for helping me find my life partner. The service's extensive database of genuine profiles and its commitment to user privacy and security impressed me. The service's unique features, such as compatibility tests and personality assessments, helped me find a match who complements me perfectly. I am now happily engaged and looking forward to a lifetime of happiness with my partner!",
  },
  {
    testimonialTitle: "Testimonial 5",
    testimonialInfo: "I had a wonderful experience with the matrimonial service. The service's intuitive interface and easy-to-use features made it convenient for me to search for a partner who matches my preferences. The service's customer support team was responsive and helpful throughout the process. I found my soulmate through the service, and we are now planning our wedding. I highly recommend the service to anyone seeking a life partner!",
  },
  {
    testimonialTitle: "Testimonial 6",
    testimonialInfo: "The matrimonial service exceeded my expectations in helping me find my life partner. The service's advanced matching algorithms and thorough profile verification process ensured that I connected with genuine and like-minded individuals. The service's emphasis on user privacy and security gave me confidence in using the platform. I am now happily married and grateful to the service for bringing me love and happiness!",
  }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [bgColor, setBgColor] = React.useState('transparent');

  const handleScroll = () => {
    if (window.pageYOffset > 2) {
      setBgColor('#ffffff');
    } else {
      setBgColor('transparent');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [showFullInfo, setShowFullInfo] = React.useState(false);

  const handleToggle = () => {
    setShowFullInfo(!showFullInfo);
  }


  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: bgColor, p: 1, }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt='logo' className='logo' />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <a class="hover-underline-animation">{page}</a>
              ))}
              <a class="hover-navbar-button">
                <span></span>
                <text>Contact Us</text>
              </a>
            </Box>
            <Box
              sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleDrawer}
              >
                <MenuIcon sx={{ color: '#9F0B0B' }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleToggleDrawer}
                sx={{ width: '100vw', maxWidth: '100vw', display: { xs: 'block', md: 'none' } }}
              >
                <Box sx={{width:'50vh'}}>
                  {/* Close button */}
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="close"
                    onClick={handleToggleDrawer}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <Close /> {/* Replace CloseIcon with your desired close icon component */}
                  </IconButton>
                  <List component="nav" aria-label="drawer navigation">
                    {pages.map((page) => (
                      <ListItem
                        key={page}
                        button
                        onClick={handleCloseDrawer}
                        className="hover-underline-animation"
                      >
                        <ListItemText primary={page} />
                      </ListItem>
                    ))}
                    <a class="hover-navbar-button">
                      <span></span>
                      <text>Contact Us</text>
                    </a>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid container sx={{ backgroundColor: 'white' }}>
        {/* <div className="header-image"> */}
        <Grid xs={12} lg={7} sx={{ padding: "60px", marginTop: '50px' }}>
          <Typography>Srilanka's Best Non-Profit Matrimony Service for Muslims!</Typography>
          <h1 className='from-left-and-back' style={{ fontSize: '50px', fontWeight: '800' }}>Lifebond Matrimony</h1><br></br>
          <hr className='stylistic-header-breakline'></hr><br></br>
          <Typography sx={{ fontSize: "20px", margin: '0', padding: '0' }}>
            <p className='header-text-styling'>{headerInfoEnglish}</p>
            <p className='header-text-info-styling'>{headerInfoTamil}</p>
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "800px" }}>
            {tagNames.map((tagName, index) => (
              <Grid lg={3} xs={12} sx={{ padding: '3px' }}>
                <a class="hover-tagname-animation">{tagName}</a>
              </Grid>
            ))}
          </div>
        </Grid>
        {/* </div> */}
      </Grid>
      <Grid container sx={{ padding: '50px' }}>
        <div>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>Testimonials</h1>
        </div>
        <Carousel
          show={3}
          slide={1}
          swiping={true}
          transition={0.5}
          rightArrow={
            <IconButton style={{ position: 'relative', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
              <ArrowForwardIcon />
            </IconButton>
          }
          leftArrow={
            <IconButton style={{ position: 'relative', left: '0', top: '50%' }}>
              <ArrowBackIcon />
            </IconButton>
          }
        >
          {testimonialData.map((testimonial, index) => (
            <Card key={index} sx={{ maxWidth: 500, margin: '30px', borderTop: '5px solid #9F0B0B', '&:hover': { transform: 'translateY(-2%)', transition: '0.3s' } }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {testimonial.testimonialTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* {showFullInfo
                        ? testimonial.testimonialInfo
                        : testimonial.testimonialInfo.length > 100
                          ? testimonial.testimonialInfo.substr(0, 100) + "..."
                          : testimonial.testimonialInfo}
                      {testimonial.testimonialInfo.length > 100 && (
                        <a href="#" onClick={handleToggle}>
                          {showFullInfo ? "Read Less" : "Read More"}
                        </a>
                      )} */}
                    {testimonial.testimonialInfo}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </Grid>
      <Grid container>
        <Grid lg={6} xs={12} sx={{ padding: '50px', backgroundColor: 'white', border: '0px solid #9F0B0B' }}>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>About Us</h1>
          <Typography sx={{ color: 'grey', fontSize: '14px' }}>LifeBond Foundation Guarantee Limited was established in the year 2021, as a Non-Profit Charitable Organization committed to serve the Sri Lankan Muslims worldwide. LifeBond Matrimony is a project of LifeBond Foundation and aims to facilitate successful marriages within our community.
            <br />Our mission is based on the Quranic injunction in Surah Noor, verse 32 where Allah (swt) commands us to “marry off the unmarried “- implying it is a social responsibility to help the unmarried to marry.
            <br />LifeBond Matrimony has plans to offer pre and post marital counselling, match making services as well as personal counselling and legal aid in matrimonial matters. LifeBond matrimony hopes to work in partnership with reputed social service organisations to broaden its operations within our local communities in SriLanka as well as to increase our reach globally.
          </Typography>
        </Grid>
        <Grid lg={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className="aboutImageContainer"></div>
        </Grid>
        <Grid lg={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className="ourStoryImageContainer"></div>
        </Grid>
        <Grid lg={6} xs={12} sx={{ padding: '50px', backgroundColor: 'white', border: '0px solid #9F0B0B' }}>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>Our Story</h1>
          <Typography sx={{ color: 'grey', fontSize: '14px' }}>
            Before 2017,Realising the advantage of using social media in facilitating marriage proposals, groups of young professionals and social activists, started offering free matrimonial services through facebook and whatsapp under different names such as Happy Hearts, slnikah and srilankannikah.
            In the year 2017, AlKafala Foundation,under the leadership of Alhaj. S. L. M. Fausz,invited these groups to collaborate to form a web based free matrimonial service.This resulted in the formation of NikahLanka.
          </Typography>
        </Grid>
        <Grid lg={6} xs={12} sx={{ padding: '50px', backgroundColor: 'white' }}>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>NikahLanka</h1>
          <Typography sx={{ color: 'grey', fontSize: '14px' }}>
            By the Grace of Allah,NikahLanka was able to steadfastly serve the Sri Lankan Muslim community for the last 5 years,by hosting more than 6,000 profiles of eligible Sri Lankan Muslim brides and grooms based within the island as well as in foreign countries. We have successfully facilitated more than a 1,000 marriages Alhamdulillah !
          </Typography>
        </Grid>
        <Grid lg={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className="nikkahlankaImageContainer"></div>
        </Grid>
        <Grid lg={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className="nikkahlankatolifebondImageContainer"></div>
        </Grid>
        <Grid lg={6} xs={12} sx={{ padding: '50px', backgroundColor: 'white', border: '0px solid #9F0B0B' }}>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>Nikahkanka to LifeBond</h1>
          <Typography sx={{ color: 'grey', fontSize: '14px' }}>
            The years 2020-21 saw NikahLanka at a crossroad and facing three main challenges to continue it’s services to the community :
            Long term Financial sustainability
            Our vision to broaden the services to include pre and post marriage counselling, marriage reconciliation and legal aid.
            Confusion caused in the minds of the public due to several other matrimonial websites using the word NIKAH, resulting in people accusing us for the misdeeds of others
            To overcome these challenges,we decided to incorporate a guarantee company with a unique name LifBond Foundation,so as to stand out as a separate entity and to legally ensure that no member will get any financial benefit from it’s operation. We also decided to charge a nominal subscription fee to ensure financial stability and to meet the fund requirements for the improving and broadening of our services .
            We strive to be the best non profit matrimonial service provider for the Sri Lankan muslim communities worldwide
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} lg={6} sx={{ padding: '50px', flexDirection: 'column' }}>
          <h1 className='from-left-and-back' style={{ fontSize: '35px', fontWeight: '800' }}>Contact Us</h1>
          <TextField id="filled-basic" label="Name" variant="outlined" fullWidth sx={{ marginTop: '20px' }} />
          <TextField id="filled-basic" label="Email" variant="outlined" fullWidth sx={{ marginTop: '20px' }} />
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ marginTop: '20px' }}
            inputProps={{ border: '1px solid red' }}
          />
          <Button variant='outlined' sx={{marginTop:'10px'}} >Send Message</Button>
        </Grid>
        <Grid xs={12} lg={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.803855979764!2d79.82118601210618!3d6.9219225761096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1681052875937!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>

      </Grid>
    </>
  );
}

export default ResponsiveAppBar;
