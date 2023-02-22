import React from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    this.setState({
      query: event.currentTarget.value.toLowerCase(),
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleFormSubmit}>
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
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
