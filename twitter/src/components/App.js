import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase"; // jsconfig 덕분에 이런 식으로 import 가능

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // 로그인 여부 판별
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
