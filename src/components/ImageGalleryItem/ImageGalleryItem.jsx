import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, id }) => {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
