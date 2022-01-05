import React from 'react';
import styled from '@emotion/styled';

interface ColorButtonProps {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
  id: string;
}

const ColorButton = (props: ColorButtonProps) => {
  const { children, onClick, color, id } = props;
  return (
    <StyledButton onClick={onClick} color={color} id={id}>
      {children}
    </StyledButton>
  );
};

export default ColorButton;

const StyledButton = styled('button')<ColorButtonProps>`
  border-radius: 1rem;
  padding: 1rem;
  width: 10rem;
  background: ${(props) => props.color};

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;
