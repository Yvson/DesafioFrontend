// React Router
import { Link } from 'react-router-dom';

// Components
import CustomLink from './CustomLink';
import logo from '../static/Logo.png';

// Material UI
import { Box, AppBar, Toolbar, CardMedia, Typography, Button, Paper, Stack } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const BoxItem = styled(Box)(({ theme }) => ({
    paddingLeft: 12,
    paddingRight: 12,
    [theme.breakpoints.down('md')]: {
        paddingLeft: 3,
        paddingRight: 3,
    },
  
}));

const BoxLogo = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        display:'none',
    },
  
}));

export default function Header() {
    return (
        <Box display='flex' sx={{  }}>
            <CssBaseline />
            <AppBar elevation={0} position="fixed" sx={{bgcolor:'#2B3846', borderBottom:1, borderColor:'#465C74'}}>
                <Toolbar sx={{maxHeight:'60px', paddingLeft: 3}}>
                    <BoxLogo position='sticky'>
                        <Link to=''>
                            <CardMedia
                                component="img"
                                height="35"
                                image={logo}
                                alt="green iguana"
                            />
                        </Link>
                    </BoxLogo>

                    <Box flexGrow={1} display='flex' flex='row' justifyContent='center' alignItems='center' sx={{ marginLeft:1.5, marginRight:1.5 }}>
                        <BoxItem>
                            <CustomLink to='/'>
                                <Button variant="text" sx={{color:'white', textTransform: 'none'}}>
                                    <FormatListBulletedOutlinedIcon sx={{paddingRight:1}}/>
                                    <Typography variant="subtitle1" component="span" sx={{ fontSize:'0.875rem', fontWeight: 400, lineHeight: 1.2}}>Funds</Typography>
                                </Button>
                            </CustomLink>
                        </BoxItem>
                        <BoxItem>
                            <CustomLink to='/information'>
                                <Button variant="text" sx={{color:'white', textTransform: 'none'}}>
                                    <InfoOutlinedIcon sx={{paddingRight:1}}/>
                                    <Typography variant="subtitle1" component="span" sx={{ fontSize:'0.875rem', fontWeight: 400, lineHeight: 1.2}}>Information</Typography>
                                </Button>
                            </CustomLink>
                        </BoxItem>
                        <BoxItem>
                            <CustomLink to='/historical-data'>
                                <Button variant="text" sx={{color:'white', textTransform: 'none'}}>
                                    <BarChartOutlinedIcon sx={{paddingRight:1}}/>
                                    <Typography variant="subtitle1" component="span" sx={{ fontSize:'0.875rem', fontWeight: 400, lineHeight: 1.2}}>Historical Data</Typography>
                                </Button>
                            </CustomLink>
                        </BoxItem>
                    </Box>
                    <BoxLogo display='flex' flex='row' justifyContent='center' alignItems='center' sx={{ marginLeft:1.5, marginRight:1.5 }}>
                        <Typography variant="h6" sx={{fontSize:14, paddingRight:2, color:"primary.common.white"}}>Hi, Guest</Typography>
                        <AccountCircleOutlinedIcon sx={{fontSize: 32}} />
                    </BoxLogo>
                </Toolbar>
            </AppBar>            
        
        </Box>
    )
}
