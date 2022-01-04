import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface IButtonProps {
  color: string;
}

const ColorButton = () => {
  // 클릭한 버튼에 border 설정
  const [prev, setPrev] = useState('');
  const [current, setCurrent] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    setCurrent(e.target.id);
  };

  useEffect(() => {
    if (current !== '') {
      const currentBtn = document.getElementById(current);
      if (currentBtn === null) return;
      currentBtn.style.border = '2px solid #919191';
    }
    if (prev !== '') {
      const prevBtn = document.getElementById(prev);
      if (prevBtn === null) return;
      prevBtn.style.border = 'none';
    }
    setPrev(current);
  }, [current]);

  return (
    <StyledRoot>
      <StyledButton onClick={handleClick} color="#FED3DC" id="pink">
        #FED3DC
      </StyledButton>
      <StyledButton onClick={handleClick} color="#E2FFE9" id="green">
        #E2FFE9
      </StyledButton>
      <StyledButton onClick={handleClick} color="#FFFEAF" id="yellow">
        #FFFEAF
      </StyledButton>
    </StyledRoot>
  );
};

export default ColorButton;

const StyledRoot = styled('div')`
  display: flex;
  margin: 1rem auto;
`;

const StyledButton = styled('button')<IButtonProps>`
  border-radius: 1rem;
  padding: 1rem;
  width: 10rem;
  background: ${(props) => props.color};

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;
