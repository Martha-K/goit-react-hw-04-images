import PropTypes from 'prop-types';

import { ButtonPage } from './styled';

export const Button = ({ onNextPage }) => {
  return (
    <ButtonPage type="button" onClick={() => onNextPage()}>
      Load more
    </ButtonPage>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func,
};
