import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './Modal.styled';
export const Modal = props => {
  const onEscapePress = event => {
    if (event.code === 'Escape') {
      props.closeModal();
    }
  };

  // componentDidMount() {
  //   window.addEventListener('keydown', this.onEscapePress);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onEscapePress);
  // }

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);

    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  }, []);

  const handleClick = event => {
    if (event.target !== event.currentTarget) {
      props.closeModal();
    }
  };

  const { largeImageURL, tags } = props;
  return (
    <Overlay onClick={handleClick}>
      <StyledModal>
        <img src={largeImageURL} alt={tags} />
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
