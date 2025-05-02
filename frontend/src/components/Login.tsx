import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthForm />
    </div>
  );
};

export default Login;
