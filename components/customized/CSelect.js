import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const CSelect = ( props ) => {
    const { name, label, value, items, id, text, onChange } = props;

    return (
        <FormControl 
            fullWidth 
            variant="outlined" 
            size="small"
            margin='normal'
        >
            <InputLabel>{ label }</InputLabel>
            <Select
                name={name}
                value={value}
                onChange={onChange}
                label={ label }
            >
                {items.map( 
                    item => 
                    <MenuItem
                        key={ id ? item[id] : item }
                        value={ id ? item[id] : item }
                    >{ id ? item[text] : item }</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

CSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    items: PropTypes.array.isRequired,
    id: PropTypes.string,
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default CSelect;
