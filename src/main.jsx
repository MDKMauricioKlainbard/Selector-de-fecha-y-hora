import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { esES } from '@mui/x-date-pickers/locales';
import es from 'date-fns/locale/es';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es} localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}>
      <App />
    </LocalizationProvider>
  </React.StrictMode>,
)
