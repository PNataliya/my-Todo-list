import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, TitleSectionBox } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      {title && <TitleSectionBox>{title}</TitleSectionBox>}
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
