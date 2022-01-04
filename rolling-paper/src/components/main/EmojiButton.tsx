import styled from '@emotion/styled';

const EmojiButton = () => {
  return (
    <StyledRoot>
      <button>💗</button>
      <button>😻</button>
      <button>🐾</button>
    </StyledRoot>
  );
};

export default EmojiButton;

const StyledRoot = styled('div')`
  display: flex;
  margin: 1rem auto;

  & > button {
    padding: 1rem;
    font-size: 2rem;

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;
