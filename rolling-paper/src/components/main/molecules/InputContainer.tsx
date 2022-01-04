import React, { useState } from 'react';
import Input from '../atoms/Input';

const InputContainer = () => {
  const [receiver, setReceiver] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');

  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
    console.log(`handleReceiverChange : ${receiver}`);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    console.log(`handleContentChange : ${content}`);
  };

  const handleWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    console.log(`handleWriterChange : ${writer}`);
  };

  const handleReceiverKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!receiver) {
        alert('입력된 내용이 없습니다.');
        return;
      }
      console.log(`handleReceiverKeyUp : ${receiver}`);
      setReceiver('');
    }
  };

  const handleContentKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!content) {
        alert('입력된 내용이 없습니다.');
        return;
      }
      console.log(`handleContentKeyUp : ${content}`);
      setContent('');
    }
  };

  const handleWriterKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!writer) {
        alert('입력된 내용이 없습니다.');
        return;
      }
      console.log(`handleWriterKeyUp : ${writer}`);
      setWriter('');
    }
  };

  return (
    <>
      <Input value={receiver} placeholder="받는 사람" onChange={handleReceiverChange} onKeyUp={handleReceiverKeyUp} />
      <Input value={content} placeholder="내용" onChange={handleContentChange} onKeyUp={handleContentKeyUp} />
      <Input value={writer} placeholder="작성자" onChange={handleWriterChange} onKeyUp={handleWriterKeyUp} />
    </>
  );
};

export default InputContainer;
