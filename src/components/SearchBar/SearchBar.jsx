import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  Input,
} from './styled';


export const SearchBar = ({onSubmit}) => {
  const [picturesName, setPicturesName] = useState('')
  
 const onSubmits = event => {
    event.preventDefault();

    if (picturesName === '') {
      alert('Error');
      return;
    }
    onSubmit(picturesName);
    setPicturesName('');
  };

 const handelPicturesName = event => {
    setPicturesName(event.currentTarget.value.toLowerCase().trim(),
    );
  };
  
  return (
    <>
      <Searchbar>
        <SearchForm onSubmit={onSubmits}>
          <SearchFormButton type="submit">
            <ImSearch />
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={picturesName}
            onChange={handelPicturesName}
          />
        </SearchForm>
      </Searchbar>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
