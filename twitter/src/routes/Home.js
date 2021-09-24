import React, { useState } from "react";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (event) => {
    // event로부터 target 안에 있는 value를 달라고 하는 것
    const { target: { value } } = event;
    setTweet(value);
  }
  return (<div>
    <form onSubmit={onSubmit}>
      <input value={tweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
      <input type="submit" value="Tweet" />
    </form>
  </div>);
}
export default Home;