import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL, tags, id } = this.props;
    return (
      <li key={id} className="gallery-item" onClick={this.handleToggleModal}>
        <img src={webformatURL} alt={tags} />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.handleToggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
