import React, { useState } from 'react';
import { StyledItem, StyledImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, id }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  return (
    <StyledItem key={id} onClick={handleToggleModal}>
      <StyledImage src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={handleToggleModal}
        />
      )}
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};
