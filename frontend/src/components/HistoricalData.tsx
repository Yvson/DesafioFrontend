
// Material UI
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function HistoricalData() {

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
                                <CircularProgress sx={{color:'grey.800'}}/>
                                <Typography variant="h2" sx={{ fontWeight:'500', color:"#2B3846", padding:4}}>
                                    Not Ready
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight:'300', color:"#2B3846"}}>
                                    Come back later.
                                </Typography>

                            </Box>

                    </Box>
                            
                </Box>

            </Box>
        </Box>
    );

}