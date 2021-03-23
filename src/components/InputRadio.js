import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const InputRadio = ({ name, label, value, classes }) => (
  <FormControlLabel
    value={ value }
    label={ label }
    control={ <Radio inputProps={ { 'data-testid': name } } className={ classes } /> }
  />
);

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

InputRadio.defaultProps = {
  classes: '',
};

export default InputRadio;
