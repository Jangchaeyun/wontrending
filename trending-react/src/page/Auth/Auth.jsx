import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import SigninForm from "./SigninForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer text-white">
      <div className="absolute  top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50">
        <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
          <h1 className="text-6xl font-bold pb-9">Won Treading</h1>
          {location.pathname == "/signup" ? (
            <section className="w-full">
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>계정이 이미 있으십니까?</span>
                <Button onClick={() => navigate("/signin")} variant="ghost">
                  로그인
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section>
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span>로그인으로 돌아가시겠습니까?</span>
                <Button onClick={() => navigate("/signin")} variant="ghost">
                  로그인
                </Button>
              </div>
            </section>
          ) : (
            <section>
              <SigninForm />
              <div className="flex items-center justify-center">
                <span>계정이 없으십니까?</span>
                <Button onClick={() => navigate("/signup")} variant="ghost">
                  회원가입
                </Button>
              </div>
              <div className="">
                <Button
                  className="w-full py-5 text-black"
                  onClick={() => navigate("/forgot-password")}
                  variant="outline"
                >
                  비밀번호 찾기
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
