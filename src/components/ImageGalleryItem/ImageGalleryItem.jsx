import PropTypes from 'prop-types';
import React from 'react';
import { Li, Img } from './styled';

export const ImageGalleryItem = ({ src, alt, id, onImageClick }) => {
  return (
    <Li key={id}>
      <Img src={src} alt={alt} onClick={() => onImageClick()} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  onImageClick: PropTypes.func,
};
