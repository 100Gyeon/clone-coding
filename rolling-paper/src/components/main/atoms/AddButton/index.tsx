import React from 'react';
import styled from '@emotion/styled';

const AddButton = () => {
  return <StyledAddBtn>+</StyledAddBtn>;
};

export default AddButton;

const StyledAddBtn = styled('button')`
  margin-left: 1rem;
  font-size: 4rem;
`;
