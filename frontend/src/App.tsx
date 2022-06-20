import './App.css'

// React Router
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Funds from './components/Funds';
import Information from './components/Information';
import InformationNoFund from './components/InformationNoFund';
import HistoricalData from './components/HistoricalData';
import PageNotFound from './components/PageNotFound';

 
// Material UI
import { Box } from '@mui/material';


function App() {

  return (
    <Box sx={{display:'flex', height:'100vh', width:'100%', overflow: 'auto', bgcolor:"#212B36"}}>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Funds />} />
          <Route path="information">
            <Route path="" element={<InformationNoFund />} />
            <Route path=":fundId" element={<Information />} />
          </Route>
          <Route path="historical-data">
            <Route path="" element={<HistoricalData />} />
            <Route path=":fundId" element={<HistoricalData />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
