// React
import { useEffect } from 'react'

// React Router
import { useNavigate } from 'react-router-dom';

// Material UI
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef, gridClasses } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { pageFundsLoaded } from '../app/slice/uiSlice';

// Utils
import { formatFunds } from '../utils/fundsUtils';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Funds() {

    const dispatch = useDispatch();
    const funds = useSelector((state:any) => state.funds.allFunds.content);
    const loading = useSelector((state:any) => state.ui.loading);
    
    useEffect(() => {
      dispatch(pageFundsLoaded({}));
    }, [dispatch]);

    // Navigate - React Router
    let navigate = useNavigate();

    // Format Funds Data
    let final_funds:any = formatFunds(funds) || [];
    
    
    // Datagrid
    const rows: GridRowsProp = final_funds;
      
    const columns: GridColDef[] = [
        { field: 'cnpj_fundo', headerName: 'CNPJ', width: 150 },
        { field: 'razao_social', headerName: 'Razão Social', width: 200 },
        { field: 'classe_anbima', headerName: 'Classe ANBIMA', width: 150 },
        { field: 'codigo_anbima', headerName: 'Código ANBIMA', width: 150 },
        { field: 'nome_fantasia', headerName: 'Nome Fantasia', width: 200 },
        { field: 'tipo_classe_cota', headerName: 'Tipo Classe de Cota', width: 150 },
        { field: 'data_inicio_divulgacao_cota', headerName: 'Data de Início de Divulgação de Cotas do Fundo', width: 150 },
        { field: 'situacao_atual', headerName: 'Situação Atual do Fundo', width: 150 },
        { field: 'data_encerramento', headerName: 'Data de Encerramento do Fundo', width: 150 },
        { field: 'data_atualizacao', headerName: 'Data de Atualização', width: 150 },
    ];

      
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
                    <Typography variant="h5" sx={{ fontWeight:'500', color:"#2B3846", paddingBottom:2}}>Desafio Técnico</Typography>
                    <Typography variant="body1" sx={{ fontWeight:'300', color:"#2B3846", paddingBottom:2}}>
                        Esse projeto é resultado da solução de um desafio técnico para construir uma aplicação focada em consumo de API e implementada através de tecnologias voltadas para o front-end - React, Material UI, React Router, Redux, Typescript, Vite e Axios. A aplicação consome a API Sandbox fornecida pela ANBIMA através da iniciativa Anbima FEED e lista os fundos estruturados e os seus detalhes. Esse projeto foi concluido dentro de 2 dias e o seu código está disponível em github.com/Yvson.
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight:'500', color:"#2B3846", paddingBottom:2}}>Funds</Typography>
                    <Box 
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center' 
                        width='100%'
                        height='100%'
                        sx={{overflow:'auto'}}
                        >
                        {loading ? 
                            <CircularProgress sx={{color:'grey.800'}}/>
                            :
                            <Box 
                                width='100%'
                                flexGrow={1}
                                >
                                <DataGrid
                                    onRowClick={(params) => {
                                        navigate(`./information/${params.row.cnpj_fundo}`, { replace: false });
                                    }}
                                    rows={rows}
                                    columns={columns}
                                    components={{ Toolbar: GridToolbar }}
                                    getRowHeight={() => 'auto'}
                                    sx={{
                                        cursor: 'pointer',
                                        fontSize:'12px',
                                        [`& .${gridClasses.cell}`]: {
                                            py: 2,
                                          },

                                    }}
                                />
                            </Box>
                        }

                    </Box>
                            
                </Box>

            </Box>
        </Box>
    );
}