import React from 'react';
import { StyledGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <StyledGallery>
      {images?.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </StyledGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
