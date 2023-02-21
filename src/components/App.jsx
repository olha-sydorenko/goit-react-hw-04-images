import { fetchImages } from './fetchImages';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
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
      // this.setState({ isLoading: true });
      const data = await fetchImages(query, page);

      if (prevState.query !== query || prevState.page !== page) {
        // this.setState({ images: data.hits });
        // console.log(this.state.images);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
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
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {/* <ul>
          {images.map(({ id, webformatURL, tags }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul> */}
        <Button onClick={this.handleBtnClick} />
      </div>
    );
  }
}
