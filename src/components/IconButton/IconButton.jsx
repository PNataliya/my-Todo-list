import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from './IconButton.styled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <ButtonIcon type="button" onClick={onClick} {...allyProps}>
    {children}
  </ButtonIcon>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
