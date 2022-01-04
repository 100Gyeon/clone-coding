import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { placeholder, value, onChange, onKeyUp } = props;
  return <StyledInput type="text" value={value} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp} />;
};

export default Input;

const StyledInput = styled('input')`
  margin-bottom: 1rem;
`;
