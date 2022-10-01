import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import { CountriesAutocomplete } from './components/CountriesAutocomplete';

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <CountriesAutocomplete 
          selectCountry={country => setSelectedCountries([...selectedCountries, country])}
        />

        <Box display="flex" sx={{ gap: '16px' }}> 
          {
            selectedCountries.map((country, index) => <Typography key={index} sx={{ color: 'black' }}>{country?.code}</Typography>)
          }
        </Box>
      </header>
    </div>
  );
}

export default App;
