import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}

      {/* {images.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} />
        </li>
      ))} */}
    </ul>
  );
};

ImageGallery.propTyoes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
