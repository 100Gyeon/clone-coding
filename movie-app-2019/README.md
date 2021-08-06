# Movie App 2019

React JS Fundamentals Course (2019 Update)

## 💡 What I Learned
- 새로운 리액트 앱 만들기  
  ```
  npx create-react-app my-app(프로젝트명)
  cd my-app
  npm start
  ```
- component  
  - HTML을 반환하는 함수  
  - 대문자로 시작  
  - component에서 component로 정보를 보낼 수 있다.  
  - 리액트는 component와 함께 동작한다.  
- props  
  - component에 넣게 되는 것들  
  - props는 component의 argument로 간다.    
    ```javascript
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
    ```
  - 전달받은 props가 내가 원하는 props인지 확인하려면?
    ```
    npm i prop-types
    ```
    ```javascript
    Food.propTypes = {
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      rating: PropTypes.number
    };
    ```
    > [리액트 문서](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
- JSX : JavaScript 안의 HTML  
- Each child in a list should have a unique "key" prop.  
  - 배열의 각 요소에 id를 부여함으로써 unique하게 만든다.  
    ```html
    <Food key={dish.id} name={dish.name} picture={dish.image} />
    ```  
  - key prop은 리액트 내부에서 사용하기 위한 것으로, component의 argument에 없어도 된다.