import { Autocomplete, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import COUNTRIES from './countries.json';

export function CountriesAutocomplete({
    selectCountry,
}) {
    const [inputValue, setInputValue] = useState('');

    return (
        <Autocomplete
            clearOnBlur
            getOptionLabel={({ name }) => name}
            inputValue={inputValue}
            onChange={(_, country) => {
                selectCountry(country);
            }}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
            }}
            options={COUNTRIES}
            renderInput={(params) => (
                <Fragment>
                    <TextField 
                        {...params} 
                        label="Country" 
                    />
                </Fragment>
            )}
            sx={{ width: 300 }}
        />
    )
}