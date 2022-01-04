import React from 'react';
import styled from '@emotion/styled';

const AddButton = () => {
  return <StyledAddBtn>+</StyledAddBtn>;
};

export default AddButton;

const StyledAddBtn = styled('button')`
  margin: 1rem auto;
  display: block;
  font-size: 4rem;
`;
