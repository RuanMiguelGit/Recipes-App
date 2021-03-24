import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './ButtonLink.css';

const ButtonLink = ({
  func, LinkT, name, className, size, variant, color, type, datatest,
}) => (
  <div>
    <Link to={ LinkT }>
      <Button
        className={ className }
        size={ size }
        variant={ variant }
        color={ color }
        type={ type }
        data-testid={ datatest }
        onClick={ func }
      >
        {name}
      </Button>
    </Link>
  </div>
);

ButtonLink.propTypes = {
  LinkT: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,

};

export default ButtonLink;
