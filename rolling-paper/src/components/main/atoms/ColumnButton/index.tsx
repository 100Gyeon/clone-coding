import styled from '@emotion/styled';

const ColumnButton = () => {
  return (
    <StyledRoot>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </StyledRoot>
  );
};

export default ColumnButton;

const StyledRoot = styled('div')`
  display: flex;
  margin: 1rem auto;

  & > button {
    background: #e5e5e5;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.5rem;

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;
