
// Material UI
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// React Router
import { Link } from 'react-router-dom';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function InformationNoFund() {

    return (
        <Box width="100%" display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{ flexGrow:1 , bgcolor:"grey.50"}}>
            <DrawerHeader />
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center' 
                width='100%'
                sx={{overflow:'auto', flexGrow:1}}
                >
                
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-start'
                    alignItems='flex-start' 
                    width='90%'
                    sx={{ marginTop:2, marginBottom:4, bgcolor:"transparent", flexGrow:1}}>
                    

                    <Box 
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center' 
                        width='100%'
                        height='100%'
                        sx={{overflow:'auto'}}
                        >
                            <Box 
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center' 
                                width='100%'
                                flexGrow={1}
                                >
                            <Typography variant="h4" sx={{ fontWeight:'500', color:"#2B3846", paddingBottom:2, paddingRight:2}}>
                                Choose a Fund on <Link to='/'>Funds page</Link>.
                            </Typography>

                            </Box>

                    </Box>
                            
                </Box>

            </Box>
        </Box>
    );

}