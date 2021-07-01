import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const Adorment = ({ onClear }) => {
  return (
    <InputAdornment position="end">
      <IconButton id="clearButton" onClick={() => onClear()}>
        <ClearIcon />
      </IconButton>
    </InputAdornment>
  );
};

const Input = ({ onChange, placeholder, allowClear, className }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setText(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <FormControl className={className}>
      <OutlinedInput
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        endAdornment={
          allowClear && (
            <Adorment onClear={() => handleChange({ target: { value: '' } })} />
          )
        }
      />
    </FormControl>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.func,
  allowClear: PropTypes.bool,
  className: PropTypes.func
};

Adorment.propTypes = {
  onClear: PropTypes.func
};

export default Input;
