import styled from '@emotion/styled';

const Emoji = () => {
  return (
    <StyledRoot>
      <div>💗</div>
      <div>😻</div>
      <div>🐾</div>
    </StyledRoot>
  );
};

export default Emoji;

const StyledRoot = styled('div')`
  display: flex;
  margin: 1rem auto;

  & > div {
    padding: 1rem;
    font-size: 2rem;
    cursor: grab;

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;
