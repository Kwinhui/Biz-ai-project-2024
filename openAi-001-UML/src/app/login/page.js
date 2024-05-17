"use client";
import { useCallback, useRef } from "react";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  // React 에서 사용하는 id 개념
  const emailRef = useRef();
  const passRef = useRef();
  const onLoginSubmit = useCallback(async () => {
    // 비밀번호로 로그인하는
    await signIn("credentials", {
      username: emailRef.current,
      password: passRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  }, []);

  return (
    <form>
      <input ref={emailRef} type="email" placeholder="이메일을 입력하세요" />
      <input ref={passRef} type="password" placeholder="비밀번호를 입력하세요" />
      <input onClick={onLoginSubmit} type="button" value="로그인" />
    </form>
  );
};
export default LoginPage;
