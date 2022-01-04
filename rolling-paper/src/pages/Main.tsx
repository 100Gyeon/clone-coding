import ColorButton from '../components/main/ColorButton';
import AddButton from '../components/main/AddButton';
import EmojiButton from '../components/main/EmojiButton';
import ColumnButton from '../components/main/ColumnButton';

const Main = () => {
  return (
    <>
      <input placeholder="받는 사람"></input>
      <input placeholder="내용"></input>
      <input placeholder="작성자"></input>
      <ColorButton />
      <AddButton />
      <EmojiButton />
      <ColumnButton />
    </>
  );
};

export default Main;
