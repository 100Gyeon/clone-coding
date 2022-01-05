import styled from '@emotion/styled';
import ColumnButton from '../atoms/ColumnButton';
import { useRecoilValue } from 'recoil';
import contentState from '../../../states/Content';
import writerState from '../../../states/Writer';
import colorState from '../../../states/Color';

const PaperContainer = () => {
  const content = useRecoilValue(contentState);
  const writer = useRecoilValue(writerState);
  const color = useRecoilValue(colorState);

  return (
    <>
      <ColumnButton />

      {/* 롤링페이퍼 공간 */}
      {content && writer && color ? (
        <StyledPaper color={color}>
          <div>{content}</div>
          <div>From. {writer}</div>
        </StyledPaper>
      ) : null}
    </>
  );
};

export default PaperContainer;

const StyledPaper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 18rem;
  padding: 2rem;
  border-radius: 2rem;
  font-size: 1.4rem;
  background-color: ${(props) => props.color};
  overflow: hidden;

  & > div:first-of-type {
    flex: 1;
  }
`;
