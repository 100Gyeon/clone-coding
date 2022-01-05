import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ColorButton from '../atoms/ColorButton';
import AddButton from '../atoms/AddButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import contentState from '../../../states/Content';
import writerState from '../../../states/Writer';
import colorState from '../../../states/Color';

const ButtonContainer = () => {
  // 클릭한 버튼에 border 설정
  const [prev, setPrev] = useState('');
  const [current, setCurrent] = useState('');

  const content = useRecoilValue(contentState);
  const writer = useRecoilValue(writerState);
  const [color, setColor] = useRecoilState(colorState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    setCurrent(e.target.id);
    setColor(e.target.innerText);
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

  const addList = () => {
    console.log(content, writer, color);
  };

  return (
    <StyledRoot>
      <ColorButton onClick={handleClick} color="#FED3DC" id="pink">
        #FED3DC
      </ColorButton>
      <ColorButton onClick={handleClick} color="#E2FFE9" id="green">
        #E2FFE9
      </ColorButton>
      <ColorButton onClick={handleClick} color="#FFFEAF" id="yellow">
        #FFFEAF
      </ColorButton>
      <AddButton onClick={addList} />
    </StyledRoot>
  );
};

export default ButtonContainer;

const StyledRoot = styled('div')`
  display: flex;
  margin: 1rem auto;
`;
