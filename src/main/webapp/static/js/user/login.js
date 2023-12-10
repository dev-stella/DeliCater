'use strict';
function loginValidate() {
  // 화면에 정보를 받아와서 넣어줌
  var user_email = document.getElementById('user_email').value;
  var password = document.getElementById('password').value;

  if (user_email === '') {
    alert('이메일을 입력하세요');
  } else if (password === '') {
    alert('비밀번호를 입력하세요');
  } else {
    login(user_email, password);
  }
}
function login(user_email, password) {
  // 예제에서는 간단히 사용자명이 'user'이고 비밀번호가 'pass'일 때 로그인 성공으로 간주합니다.
  if (user_email === 'user@naver.com' && password === 'pass') {
    //로그인 전에 화면정보? 위치?를 담고 있다가 성공시 해당 페이지로 이동
    window.location.href = 'main.html';
  } else {
    alert('로그인 실패. 사용자명 또는 비밀번호를 확인하세요.');
  }
}
