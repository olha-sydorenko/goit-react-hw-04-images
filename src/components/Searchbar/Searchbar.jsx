import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

export const Searchbar = props => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    props.onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>
            <ImSearch size="18px" />
          </ButtonLabel>
        </SearchButton>

        <FormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
