import { fetchImages } from './fetchImages';
import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export const App = () => {
  // state = {
  //   query: '',
  //   images: [],
  //   isLoading: false,
  //   error: '',
  //   page: 1,
  // };
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
  };

  // async componentDidUpdate(_, prevState) {
  //   const { query, page } = this.state;

  //   if (prevState.query !== query || prevState.page !== page)
  //     try {
  //       const data = await fetchImages(query, page);

  //       this.setState({ isLoading: true });
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...data.hits],
  //       }));
  //     } catch (error) {
  //       this.setState({ error: error.message });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  // }

  useEffect(() => {
    // if (prevState.query !== query || prevState.page !== page) {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages(prevState => [...prevState, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  // const { images, isLoading } = this.state;
  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {images.length > 0 && <Button onClick={handleBtnClick} />}
      {isLoading && <Loader />}
    </Container>
  );
};
