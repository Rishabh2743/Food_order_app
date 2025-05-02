import { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div
      className={`relative w-[768px] max-w-full min-h-[480px] rounded-lg shadow-xl overflow-hidden transition-all duration-700 font-mont bg-white`}
    >
      {/* Sign Up Form */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 p-10 transition-all duration-700 ${
          isSignUp ? "translate-x-full z-50 opacity-100" : "z-10 opacity-0"
        }`}
      >
        <form className="flex flex-col items-center justify-center text-center h-full px-8">
          <h1 className="font-bold text-2xl mb-2">Create Account</h1>
          <div className="flex gap-3 my-4">
            <a className="border border-gray-300 rounded-full p-2">Facebook</a>
            <a className="border border-gray-300 rounded-full p-2">Google</a>
            <a className="border border-gray-300 rounded-full p-2">LinkedIn</a>
          </div>
          <span className="text-xs mb-2">
            or use your email for registration
          </span>
          <input
            className="bg-gray-200 p-3 my-2 w-full rounded"
            placeholder="Name"
          />
          <input
            className="bg-gray-200 p-3 my-2 w-full rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-200 p-3 my-2 w-full rounded"
            type="password"
            placeholder="Password"
          />
          <button className="mt-4 px-10 py-3 bg-[#FF4B2B] text-white font-bold text-xs uppercase rounded-full">
            Sign Up
          </button>
        </form>
      </div>

      {/* Sign In Form */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 p-10 transition-all duration-700 ${
          isSignUp ? "translate-x-full z-10 opacity-0" : "z-50 opacity-100"
        }`}
      >
        <form className="flex flex-col items-center justify-center text-center h-full px-8">
          <h1 className="font-bold text-2xl mb-2">Sign In</h1>
          <div className="flex gap-3 my-4">
            <a className="border border-gray-300 rounded-full p-2">Facebook</a>
            <a className="border border-gray-300 rounded-full p-2">Google</a>
            <a className="border border-gray-300 rounded-full p-2">LinkedIn</a>
          </div>
          <span className="text-xs mb-2">or use your account</span>
          <input
            className="bg-gray-200 p-3 my-2 w-full rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-200 p-3 my-2 w-full rounded"
            type="password"
            placeholder="Password"
          />
          <a href="#" className="text-sm my-2 text-gray-600">
            Forgot your password?
          </a>
          <button className="mt-4 px-10 py-3 bg-[#FF4B2B] text-white font-bold text-xs uppercase rounded-full">
            Sign In
          </button>
        </form>
      </div>

      {/* Overlay Container */}
      <div className="absolute top-0 left-1/2 h-full w-1/2 z-40 transition-transform duration-700">
        <div
          className={`bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white flex h-full w-[200%] transition-transform duration-700 transform ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Left Panel (For Sign In) */}
          <div className="w-1/2 flex flex-col items-center justify-center text-center px-10">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm my-6">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost px-10 py-3 border border-white rounded-full text-white font-bold text-xs uppercase"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {/* Right Panel (For Sign Up) */}
          <div className="w-1/2 flex flex-col items-center justify-center text-center px-10">
            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
            <p className="text-sm my-6">
              Enter your personal details and start your journey with us
            </p>
            <button
              className="ghost px-10 py-3 border border-white rounded-full text-white font-bold text-xs uppercase"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
