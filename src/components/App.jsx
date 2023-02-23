import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from './fetchImages';
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
  const [page, setPage] = useState(1);

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages(prevState => [...prevState, ...data.hits]);
      } catch (error) {
        toast.error("Oops! Something's gone wrong! 😿", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {images.length > 0 && <Button onClick={handleBtnClick} />}
      {isLoading && <Loader />}
      <ToastContainer />
    </Container>
  );
};
