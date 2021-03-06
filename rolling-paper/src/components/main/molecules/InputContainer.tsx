import React, { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../atoms/Input';
import { useRecoilState } from 'recoil';
import contentState from '../../../states/Content';
import writerState from '../../../states/Writer';

const InputContainer = () => {
  const [receiver, setReceiver] = useState('');
  const [content, setContent] = useRecoilState(contentState);
  const [writer, setWriter] = useRecoilState(writerState);
  const storage = localStorage.getItem('receiver');

  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const handleReceiverKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!receiver) {
        alert('받는 사람을 입력하세요.');
        return;
      }
      localStorage.setItem('receiver', receiver);
      setReceiver('');
    }
  };

  const handleContentKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!content) {
        alert('내용을 입력하세요.');
        return;
      }
    }
  };

  const handleWriterKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!writer) {
        alert('작성자를 입력하세요.');
        return;
      }
    }
  };

  return (
    <>
      {storage ? (
        <StyledDiv>To. {storage}</StyledDiv>
      ) : (
        <Input value={receiver} placeholder="받는 사람" onChange={handleReceiverChange} onKeyUp={handleReceiverKeyUp} />
      )}
      <Input value={content} placeholder="내용" onChange={handleContentChange} onKeyUp={handleContentKeyUp} />
      <Input value={writer} placeholder="작성자" onChange={handleWriterChange} onKeyUp={handleWriterKeyUp} />
    </>
  );
};

export default InputContainer;

const StyledDiv = styled('div')`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;
