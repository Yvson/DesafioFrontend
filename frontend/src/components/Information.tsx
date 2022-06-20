// React
import { useEffect } from 'react'

// Material UI
import { Box, Typography, Grid, Breadcrumbs, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';

// React Router
import { 
    useParams
} from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { pageLoaded, setLoadingOn } from '../app/slice/uiSlice';

// Utils
import { toCurrency } from '../utils/fundsUtils';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,


}));


const sx_items_title1={
    fontSize:18,
    fontWeight:'600',
    color:"#2B3846"
}

const sx_items_title2={
    fontSize:14,
    fontWeight:'600',
    color:"#2B3846"
}


const sx_items_info={
    fontSize:14,
    fontWeight:'400',
    color:"#2B3846"
}


export default function Information(props:any) {
    let { fundId } = useParams();
    const dispatch = useDispatch();
    const fundInfo = useSelector((state:any) => state.funds.fundInfo);
    const loadingFundInfo = useSelector((state:any) => state.ui.loadingFundInfo);
    
    useEffect(() => {
        dispatch(pageLoaded({fundId: fundId}));
    }, [dispatch]);
    
    return (
        <Box width="100%" display='flex' flexDirection='column' justifyContent='start' alignItems='center' sx={{ bgcolor:"grey.50", flexGrow:1}}>
            <DrawerHeader />
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
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
                        <Typography color="text.primary">CNPJ {fundId}</Typography>
                    </Breadcrumbs>

                    <Box 
                        display='flex'
                        flexDirection='column'
                        justifyContent='start'
                        alignItems='center' 
                        width='100%'
                        sx={{overflow:'auto', flexGrow:1}}
                        >
                        {(loadingFundInfo) ? 
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center' 
                                sx={{overflow:'auto', flexGrow:1}}
                            >
                                <CircularProgress sx={{color:'grey.800'}} />
                            </Box>
                            :
                            <Box 
                                display='flex'
                                flexDirection='column'
                                justifyContent='start'
                                width='100%'
                                paddingTop={4}
                                >
                                <Typography variant="h6" sx={{ fontWeight:'600', fontSize:20, color:"#2B3846" }}>Dados Cadastrais</Typography>
                                <Grid container spacing={3} paddingTop={1} columns={{ xs: 6 }}>
                                    <Grid item xs={6}>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                CNPJ: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.cnpj_fundo || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Razão Social: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.razao_social || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Classe ANBIMA: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.classe_anbima || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Tipo ANBIMA: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.tipo_anbima || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Categoria ANBIMA: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.categoria_anbima || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Composição do Fundo: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.composicao_fundo || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Classe CVM: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.classe_cvm || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Foco de Atuação: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.foco_atuacao  || '-'}
                                            </Typography>
    
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Prazo de duração do Fundo:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.prazo_duracao  || '-'}
                                            </Typography>
                                            
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Cota de abertura:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.cota_abertura === 'S' ? 'Sim' : 'Não' || '-'}
                                            </Typography>
    
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Tributação Alvo:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.dados_cadastrais.tributacao_alvo  || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Data de Atualização:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {(new Date(fundInfo.classe_serie_cota[0].dados_cadastrais.data_atualizacao).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(fundInfo.classe_serie_cota[0].dados_cadastrais.data_atualizacao).toLocaleString('pt-BR') || '-'}
                                            </Typography>
                                        </Box>

                                        {fundInfo.classe_serie_cota.map((item:any, index:number) => (
                                            <Box key={index}>
                                                <Box display='flex' flex='row' paddingTop={2}>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Nome Fantasia:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.nome_fantasia || '-'}
                                                    </Typography>
                                                </Box>
                                                <Divider />
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Código ANBIMA:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.codigo_anbima || '-'}
                                                    </Typography>
                                                </Box>

                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Tipo Classe de Cota:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.tipo_classe_cota || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Data do Primeiro Aporte no Fundo:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {(new Date(item.dados_cadastrais.data_primeiro_aporte).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : `${new Date(item.dados_cadastrais.data_primeiro_aporte).getUTCDate()}/${new Date(item.dados_cadastrais.data_primeiro_aporte).getUTCMonth()+1}/${new Date(item.dados_cadastrais.data_primeiro_aporte).getUTCFullYear()}` || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Data Início de Divulgação de Cota:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {(new Date(item.dados_cadastrais.data_inicio_divulgacao_cota).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : `${new Date(item.dados_cadastrais.data_inicio_divulgacao_cota).getUTCDate()}/${new Date(item.dados_cadastrais.data_inicio_divulgacao_cota).getUTCMonth()+1}/${new Date(item.dados_cadastrais.data_inicio_divulgacao_cota).getUTCFullYear()}` || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Data de Encerramento do Fundo:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {(new Date(item.dados_cadastrais.data_encerramento).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(item.dados_cadastrais.data_encerramento).toLocaleString('pt-BR') || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Situação atual do Fundo:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.situacao_atual === 'A' ? 'Ativo' : 'Encerrado' || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Restrito:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.restrito || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Investidor Qualificado:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.investidor_qualificado === 'S' ? 'Sim' : 'Não' || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Benchmark:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.benchmark || '-'}
                                                    </Typography>
                                                </Box>

                                            </Box>
                                        ))}
                                    </Grid>
                                </Grid>

                                <Typography variant="h6" sx={{ fontWeight:'600', fontSize:20, color:"#2B3846", paddingTop:3 }}>Prestadores de Serviço</Typography>
                                <Grid container spacing={3} paddingTop={1} columns={{ xs: 6 }}>
                                    <Grid item xs={6}>
                                        <Box paddingTop={1} paddingBottom={1}>
                                            <Typography variant="h6" sx={sx_items_title1}>
                                                Administrador
                                            </Typography>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    CNPJ:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.administrador.cnpj || '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Nome:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.administrador.nome || '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Principal Gestor:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.administrador.principal === 'true' ? 'Sim' : 'Não' || '-'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider/>
                                        {fundInfo.prestadores.gestores.map((item:any, index:number) => (
                                            <Box key={index}>
                                                <Box paddingTop={1} paddingBottom={1}>
                                                    <Typography variant="h6" sx={sx_items_title1}>
                                                        Gestor {index+1}
                                                    </Typography>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            CNPJ:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.cnpj || '-'}
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            Nome:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.nome || '-'}
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            Principal Gestor:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.principal === 'true' ? 'Sim' : 'Não' || '-'}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Divider/>                                                
                                            </Box>                                            
                                        ))}
                                        {fundInfo.prestadores.custodiantes.map((item:any, index:number) => (
                                            <Box key={index}>
                                                <Box paddingTop={1} paddingBottom={1}>
                                                    <Typography variant="h6" sx={sx_items_title1}>
                                                        Custodiante {index+1}
                                                    </Typography>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            CNPJ:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.cnpj || '-'}
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            Nome:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.nome || '-'}
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' flex='row'>
                                                        <Typography variant="body1" sx={sx_items_title2}>
                                                            Principal Gestor:
                                                        </Typography>
                                                        <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                            {item.principal === 'true' ? 'Sim' : 'Não' || '-'}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Divider/>                                                
                                            </Box>                                            
                                        ))}                          
                                        <Box paddingTop={1} paddingBottom={1}>
                                            <Typography variant="h6" sx={sx_items_title1}>
                                                Controlador de Ativos
                                            </Typography>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    CNPJ:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.controlador_ativo.cnpj || '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Nome:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.controlador_ativo.nome || '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Principal Gestor:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.controlador_ativo.principal === 'true' ? 'Sim' : 'Não' || '-'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider/>
                                        <Box paddingTop={1} paddingBottom={1}>
                                            <Typography variant="h6" sx={sx_items_title1}>
                                                Controlador de Passivos
                                            </Typography>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    CNPJ:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.controlador_passivo ? fundInfo.prestadores.controlador_passivo.cnpj : '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Nome:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.prestadores.controlador_passivo ? fundInfo.prestadores.controlador_passivo.nome : '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Principal Gestor:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.controlador_passivo ? (fundInfo.prestadores.controlador_passivo.principal === 'true' ? 'Sim' : 'Não') : '-'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider/>
                                        <Box paddingTop={1} paddingBottom={1}>
                                            <Typography variant="h6" sx={sx_items_title1}>
                                                Auditor Independente
                                            </Typography>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    CNPJ:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.auditor_independente ? fundInfo.prestadores.auditor_independente.cnpj : '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Nome:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.prestadores.auditor_independente ? fundInfo.prestadores.auditor_independente.nome : '-'}
                                                </Typography>
                                            </Box>
                                            <Box display='flex' flex='row'>
                                                <Typography variant="body1" sx={sx_items_title2}>
                                                    Principal Gestor:
                                                </Typography>
                                                <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                    {fundInfo.prestadores.auditor_independente ? (fundInfo.prestadores.auditor_independente.principal === 'true' ? 'Sim' : 'Não') : '-'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography variant="h6" sx={{ fontWeight:'600', fontSize:20, color:"#2B3846", paddingTop:3 }}>Taxas</Typography>
                                <Grid container spacing={3} paddingTop={1} columns={{ xs: 6 }}>
                                    <Grid item xs={6}>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Data de Referência: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {(new Date(fundInfo.taxas.data_referencia).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : `${new Date(fundInfo.taxas.data_referencia).getUTCDate()}/${new Date(fundInfo.taxas.data_referencia).getUTCMonth()+1}/${new Date(fundInfo.taxas.data_referencia).getUTCFullYear()}` || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Unidade da Taxa de Administração: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.unidade_taxa_adm === 'P' ? 'Percentual' : fundInfo.taxas.unidade_taxa_adm === 'V' ? 'Valor' : 'Misto'|| '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Unidade de Tempo da Taxa de Administração: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.unidade_tempo_taxa_adm || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Base para Cálculo da Taxa de Administração: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.base_calculo_taxa_adm || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Metodologia para o Cálculo da Taxa de Administração:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.metodologia_calculo_taxa_adm || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Periodicidade de Cobrança da Taxa de Administração:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.periodicidade_cobranca_taxa_adm || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Data de Início de Vigência da Taxa de Administração: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {(new Date(fundInfo.taxas.data_inicio_vigencia_taxa_adm).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : `${new Date(fundInfo.taxas.data_inicio_vigencia_taxa_adm).getUTCDate()}/${new Date(fundInfo.taxas.data_inicio_vigencia_taxa_adm).getUTCMonth()+1}/${new Date(fundInfo.taxas.data_inicio_vigencia_taxa_adm).getUTCFullYear()}` || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Cobra Taxa de Performance: 
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.cobra_taxa_performance === 'S' ? 'Sim' : 'Não' || '-'}
                                            </Typography>
    
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Periodicidade de Cobrança da Taxa de Performance:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.periodicidade_cobranca_taxa_performance || '-'}
                                            </Typography>
                                            
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Descrição da Taxa de Performance:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.descricao_taxa_performance || '-'}
                                            </Typography>
    
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Taxa de Performance não Padronizada (regras):
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.taxa_performance_nao_padronizada || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Taxa Composta:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.taxa_composta === 'S' ? 'Sim' : 'Não' || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Taxa Fixa:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.taxa_fixa || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Taxa de Administração Máxima:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {fundInfo.taxas.taxa_maxima || '-'}
                                            </Typography>
                                        </Box>
                                        <Box display='flex' flex='row'>
                                            <Typography variant="body1" sx={sx_items_title2}>
                                                Data de Atualização:
                                            </Typography>
                                            <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                {(new Date(fundInfo.taxas.data_atualizacao).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(fundInfo.taxas.data_atualizacao).toLocaleString('pt-BR') || '-'}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography variant="h6" sx={{ fontWeight:'600', fontSize:20, color:"#2B3846", paddingTop:3 }}>Movimentação de Cotas</Typography>
                                <Grid container spacing={3} paddingTop={1} columns={{ xs: 6 }}>
                                    <Grid item xs={6}>
                                        {fundInfo.classe_serie_cota.map((item:any, index:number) => (
                                            <Box key={index}>
                                                <Box display='flex' flex='row' paddingTop={2}>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Nome Fantasia:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.dados_cadastrais.nome_fantasia || '-'}
                                                    </Typography>
                                                </Box>
                                                <Divider />                                                
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Periodicidade de Divulgação de Cota: 
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {item.movimentacao.periodicidade_divulgacao_cota || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Saldo Mínimo Aplicado ao Fundo: 
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {toCurrency(item.movimentacao.saldo_minimo_aplicado_ao_fundo, 'BRL', 'pt-br') || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Aplicação Inicial Mínima: 
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {toCurrency(item.movimentacao.aplicacao_inicial_minima, 'BRL', 'pt-br') || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Aplicação Adicional Mínima: 
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {toCurrency(item.movimentacao.aplicacao_adicional_minima, 'BRL', 'pt-br') || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Resgate Mínimo:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {toCurrency(item.movimentacao.resgate_minimo, 'BRL', 'pt-br') || '-'}
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' flex='row'>
                                                    <Typography variant="body1" sx={sx_items_title2}>
                                                        Data de Atualização:
                                                    </Typography>
                                                    <Typography variant="body1" paddingLeft='6px' sx={sx_items_info}>
                                                        {(new Date(item.movimentacao.data_atualizacao).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(item.movimentacao.data_atualizacao).toLocaleString('pt-BR') || '-'}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Box>
                            
                            
                        }

                    </Box>
                            
                </Box>

            </Box>
        </Box>
    );

}