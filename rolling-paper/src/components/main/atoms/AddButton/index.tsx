import React from 'react';
import styled from '@emotion/styled';

interface AddButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButton = (props: AddButtonProps) => {
  const { onClick } = props;
  return <StyledAddBtn onClick={onClick}>+</StyledAddBtn>;
};

export default AddButton;

const StyledAddBtn = styled('button')`
  margin-left: 1rem;
  font-size: 4rem;
`;
