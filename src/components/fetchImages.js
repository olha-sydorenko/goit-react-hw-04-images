import axios from 'axios';

export const fetchImages = async (query, page = 1) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=32917411-0bf5fafbdbcee2600446b2252&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
