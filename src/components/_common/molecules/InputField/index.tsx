import { ComponentProps, useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import Icon from '@components/_common/atoms/Icon';
import S from './style';

interface InputFieldProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export default function InputField({ type = 'text', label, error, ...props }: InputFieldProps) {
  const [isVisible, setIsVisible] = useState(type !== 'password');

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <S.InputContainer>
      {label && <S.Label disabled={props.disabled}>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input
          type={isVisible ? 'text' : type}
          isError={!!error}
          {...props}
        />

        {type === 'password' && props.value && (
          <S.Icon>
            <Icon
              size='md'
              color='950'
              onClick={toggleVisibility}
            >
              {isVisible ? <BsEye /> : <BsEyeSlash />}
            </Icon>
          </S.Icon>
        )}
      </S.InputWrapper>

      {error && !props.disabled && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.InputContainer>
  );
}
