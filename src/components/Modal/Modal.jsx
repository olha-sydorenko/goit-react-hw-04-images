import React from 'react';
import { Overlay, StyledModal } from './Modal.styled';
export class Modal extends React.Component {
  onEscapePress = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }
  handleClick = event => {
    if (event.target !== event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay onClick={this.handleClick}>
        <StyledModal>
          <img src={largeImageURL} alt={tags} />
        </StyledModal>
      </Overlay>
    );
  }
}
