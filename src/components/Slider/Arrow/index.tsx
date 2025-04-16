import PropTypes from 'prop-types';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import S from '../style';

export function PrevArrow({ onClick = () => {} }) {
  return (
    <S.ArrowButton
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <Icon
        size='md'
        color='950'
      >
        <BsChevronLeft />
      </Icon>
    </S.ArrowButton>
  );
}

export function NextArrow({ onClick = () => {} }) {
  return (
    <S.ArrowButton
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <Icon
        size='md'
        color='950'
      >
        <BsChevronRight />
      </Icon>
    </S.ArrowButton>
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};
