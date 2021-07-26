function getToken() {
  return localStorage.getItem('token');
}

async function login(event) {
  event.preventDefault(); // 더 이상 submit에 관련된 로직이 진행되지 않도록
  event.stopPropagation(); // submit event가 상위로 전달되지 않도록 막아줌

  const emailElement = document.querySelector('#email');
  const passwordElement = document.querySelector('#password');

  const email = emailElement.value;
  const password = passwordElement.value;

  console.log(email, password);

  try {
    // await 키워드는 async 함수 안에서만 유효하다.
    // await를 사용하려면 login 함수는 async function이어야 함
    const res = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });
    const { token } = res.data; // const token = res.data.token;
    if (token === undefined) {
      return;
    }
    localStorage.setItem('token', token);
    location.assign('/');
  } catch (error) {
    const data = error.response.data;
    if (data) {
      const state = data.error;
      if (state === 'USER_NOT_EXIST') {
        alert('사용자가 존재하지 않습니다.');
      } else if (state === 'PASSWORD_NOT_MATCH') {
        alert('비밀번호가 틀렸습니다.');
      }
    }
  }
}

function bindLoginButton() {
  const form = document.querySelector('#form-login');
  // submit이 호출되면 login이 submit에 대한 event를 가지고 실행됨
  form.addEventListener('submit', login);
}

async function main() {
  // 버튼에 이벤트 연결
  bindLoginButton();

  // 토큰 체크
  const token = getToken();
  if (token !== null) {
    location.assign('/');
    return;
  }
}

document.addEventListener('DOMContentLoaded', main);
