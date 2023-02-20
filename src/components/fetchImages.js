import axios from 'axios';

export const fetchImages = async query => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=32917411-0bf5fafbdbcee2600446b2252&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
