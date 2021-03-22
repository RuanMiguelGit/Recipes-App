import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const InputText = ({ name, label, updateState, value, variant, size, fullWidth }) => (
  <TextField
    fullWidth={ fullWidth }
    variant={ variant }
    size={ size }
    id={ name }
    label={ label }
    value={ value }
    onChange={ (evt) => updateState(evt.target.value) }
    inputProps={ { 'data-testid': name } }
    required
  />
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  fullWidth: PropTypes.string.isRequired,
};

export default InputText;
