# Movie App 2019

React JS Fundamentals Course (2019 Update)

## 💡 What I Learned
리액트는 component와 함께 동작한다.  
- component란?  
  - HTML을 반환하는 함수  
  - 대문자로 시작  
  - component에서 component로 정보를 보낼 수 있다.  
<br>
- props란?  
  - component에 넣게 되는 것들  
  - props는 component의 argument로 간다.  
  <br>
  ```javascript
  import React from "react";

  function Food(props) {
    return <h1>I like {props.fav}.</h1>;
  }

  function App() {
    return (
      <div>
        <Food fav="spaghetti">
      </div>
    );
  }

  export default App;
  ```

- JSX : JavaScript 안의 HTML