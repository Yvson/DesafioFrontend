// React
import { useEffect } from 'react'

// Material UI
import { Box, Typography, CircularProgress, Breadcrumbs } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

// React Router
import { useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { pageHistoricalDataLoaded } from '../app/slice/uiSlice';

// Components
import { MemoizedHistoricalDataChart } from './charts/historicalDataChart';

// Utils
import { formatDate } from './utils/formatDate';

// Axios
//import axios from 'axios';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function HistoricalData() {
    let { fundId } = useParams();
    const dispatch = useDispatch();
    const historicalData = useSelector((state:any) => state.funds.historicalData);
    const loadingHistoricalData = useSelector((state:any) => state.ui.loadingHistoricalData);
    
    useEffect(() => {
        dispatch(pageHistoricalDataLoaded({fundId: fundId}));
    }, [dispatch]);

    
    const datachart = loadingHistoricalData ? {} : historicalData.classes_series_cotas.map((series_cotas:any) => ({
        historicalData: {
            yaxis: series_cotas.serie_historica.map((index:any) => index.valor_cota.toFixed(2)).reverse(),
            xaxis: series_cotas.serie_historica.map((index:any) => formatDate(index.data_referencia)).reverse(),
            codigo_anbima: series_cotas.codigo_anbima
        },
    }));
    
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
                    height='100%'
                    sx={{ marginTop:2, marginBottom:4, bgcolor:"transparent", flexGrow:1}}>
                    
                    
                    <Box 
                        display='flex'
                        flexDirection='column'
                        justifyContent='start'
                        alignItems='center' 
                        width='100%'
                        height='100%'
                        sx={{overflow:'auto', flexGrow:1}}
                        >
                            {loadingHistoricalData ?
                                <Box 
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center' 
                                width='100%'
                                flexGrow={1}
                                >
                                    <CircularProgress sx={{color:'grey.800'}}/>
                                    
                                </Box>
                                :
                                <Box 
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='start'
                                    alignItems='start' 
                                    width='100%'
                                    sx={{flexGrow:1}}
                                >
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link underline="none" color="inherit" href="/">
                                            Funds
                                        </Link>
                                        <Link
                                            underline="none"
                                            color="inherit"
                                            href={`/information/${fundId}`}
                                        >
                                            Fund
                                        </Link>
                                        <Link
                                            underline="none"
                                            color="inherit"
                                            href={`/historical-data/${fundId}`}
                                        >
                                            Historical Data
                                        </Link>
                                        <Typography color="text.primary">CNPJ {fundId}</Typography>
                                    </Breadcrumbs>
                                    {datachart.map((data:any, index:number) => (
                                        <Box key={index} width='100%' height='100%' paddingTop={2} sx={{ flexGrow:1 }}>
                                            <MemoizedHistoricalDataChart
                                                dataName={'Share Price'}
                                                data={data}
                                                title={`Historical Data - (Anbima ID: ${data.historicalData.codigo_anbima})`}
                                                subtitle={'Shares Prices along time'}
                                                color={['#A5D1E1','#A5D1E1']}
                                                width='100%'
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            }
                    </Box>
                </Box>
            </Box>
        </Box>
    );

}