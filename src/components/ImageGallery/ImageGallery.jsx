import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {
  state = {
    images: null,
  };
  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
