// React Router
import { Outlet } from 'react-router';

// Components
import Header from "./Header";


// Material UI
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';



export default function Layout(props:any) {

    return (
        <Box width="100%" display='flex' flexDirection='column' justifyContent='start' alignItems='center' sx={{ bgcolor:"#212B36" }}>
            <Header />
            <Outlet />
        </Box>
    );
}