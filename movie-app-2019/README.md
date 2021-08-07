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
  - **props는 component의 argument로 간다.**
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
    > [Docs - Typechecking with proptypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
- JSX : JavaScript 안의 HTML  
- Each child in a list should have a unique "key" prop.  
  - 배열의 각 요소에 id를 부여함으로써 unique하게 만든다.  
    ```javascript
    {foodILike.map(dish => 
      <Food key={dish.id} name={dish.name} picture={dish.image} />
    )}
    ```  
  - map에 있는 각각의 item은 key가 필요하다.
  - key prop은 리액트 내부에서 사용하기 위한 것으로, component의 argument에 없어도 된다.  
- **class component**는 return을 가지고 있지 않다.
  - function component가 아니기 때문
  - 리액트는 자동적으로 class component의 render method를 실행하고자 한다.
- state
  - state는 object이며, class component에 있다.
  - state에 바꾸고 싶은 data를 넣는다.
  - ```this.state.xxx```로 접근
    ```javascript
    render() {
      return (
      <div>
        <h1>The number is: {this.state.count}</h1>
      </div>
      );
    }
    ```
  - 💥 Do not mutate state directly. Use **setState()** 💥
    - setState를 호출할 때마다 리액트는 state를 업데이트하고 render function을 다시 호출한다.
    - setState를 호출할 때, 외부의 상태에 의존하지 않는 가장 좋은 방법 : ```this.state.xxx``` 대신 ```current.xxx``` 사용
      ```javascript
      state = {
        count: 0
      };
      add = () => {
        this.setState(current => ({ count: current.count + 1}));
      };
      ```
    - state 안에 default 값들을 선언할 필요는 없다.  
      아래 코드의 setState에는 book이 있지만, state 안에는 book이 없어도 되는 것처럼.
      ```javascript
      state = {
        isLoading: true
      };
      componentDidMount(){
        setTimeout(() => {
          this.setState({ isLoading: false, book: true })
        }, 3000);
      }
      ```
- life cycle method
  > [Docs - Component Life Cycle](https://reactjs.org/docs/react-component.html)
  - Mounting, Updating, Unmounting
  - render 이후 처음 호출되는 life cycle method는? **componentDidMount()**
  - **앞으로 data fetch는 componentDidMount에서!**
- axios
  ```
  npm i axios
  import axios from "axios";
  ```
  - fetch 위에 있는 작은 layer
  - 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
  - axios의 Request method에는 다음과 같은 것들이 있다. 여기서 url은 API의 주소.
    - 데이터 조회 : **axios.get**(url[, config])
    - 데이터 등록 및 전송 : **axios.post**(url, data[, config])
    - 데이터 수정 : **axios.put**(url, data[, config])
    - 데이터 삭제 : **axios.delete**(url[, config])
- 더이상 state를 갖기 위해 class component를 가질 필요가 없다. 👉 리액트 **Hook** 때문
- react-router-dom : 리액트에서 내비게이션을 만들어주는 패키지
  ```
  npm install react-router-dom
  ```
- 라우터가 하는 일
  1. url을 가져와 확인/비교 
  1. 명령에 해당하는 컴포넌트를 불러옴
  ```javascript
  function App(){
    return <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>;
  }
  ```
  - 만약 내가 이 path로 가면, 이 component를 보여줘!
  - route에 exact={true}를 추가한 이유 : /와 /about을 동시에 렌더링하지 않기 위해서.  
    오로지 나의 url이 /여야 Home을 렌더링