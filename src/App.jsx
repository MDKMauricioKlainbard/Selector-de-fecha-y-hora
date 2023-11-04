import { useState } from 'react'
import './App.css'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import format from 'date-fns/format';
import es from 'date-fns/locale/es';

function App() {
  const [date, setDate] = useState(new Date())
  return (
    <div className='container'>
      <MobileDateTimePicker
        label='Seleccione la fecha y la hora:'
        timezone='system'
        value={date}
        disablePast
        onChange={setDate} />
      <label className='label'>{format(date, "d 'de' MMMM 'de' y 'a las' HH:mm", { locale: es })}</label>
    </div>

  )
}

export default App
