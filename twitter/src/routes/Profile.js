import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/"); // 로그아웃된 후 다시 home으로 돌아갈 수 있도록
  }
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};