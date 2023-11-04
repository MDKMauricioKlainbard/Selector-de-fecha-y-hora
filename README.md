# Selector de fecha y hora

Las instalaciones necesarias son:
- npm install @mui/x-date-pickers
- npm install date-fns
- npm install @mui/material @emotion/react @emotion/styled

Es necesario envolver a la etiqueta App de main.jsx con la etiqueta:
<LocalizationProvider>. La etiqueta recibe por propiedad: "dateAdapter".
Importaciones:
- import { LocalizationProvider } from '@mui/x-date-pickers';
- import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
<LocalizationProvider dateAdapter={AdapterDateFns}>

Para traducir al español, se importan:
- import { esES } from '@mui/x-date-pickers/locales';
- import es from 'date-fns/locale/es';
Y se añaden las propiedades a LocalizationProvider:
adapterLocale={es} localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}

