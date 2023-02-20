import { fetchImages } from './fetchImages';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends React.Component {
  state = {
    query: '',
    images: null,
    isLoading: false,
    error: null,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, images } = this.state;
    try {
      if (prevState.query !== query) {
        this.setState({ images: await fetchImages(query) });
        console.log(images);
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}
