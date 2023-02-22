import { fetchImages } from './fetchImages';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    try {
      const data = await fetchImages(query, page);

      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true });
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  // async componentDidMount() {
  //   const { query } = this.state;
  //   try {
  //     const data = await fetchImages(query);

  //     this.setState({ images: data.hits });
  //     console.log(this.state.images);
  //   } catch (error) {}
  // }

  render() {
    const { images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images !== [] && <Button onClick={this.handleBtnClick} />}
        {isLoading && <Loader />}
      </Container>
    );
  }
}
