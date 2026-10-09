import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login submitted");
  };

  return (

    <section className="min-h-[90vh] w-full flex items-center justify-center px-6">

      {/* ================= LOGIN CARD ================= */}

      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">

        {/* HEADER */}

        <div className="text-center">

          <p className="text-purple-400 text-sm font-semibold tracking-[2.5px]">
            <span className="bg-purple-950/45 py-1 px-2 rounded">WELCOME BACK</span>
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Login to your account
          </h1>

          <p className="mt-3 text-zinc-400 text-sm">
            Enter your details to continue
          </p>

        </div>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* EMAIL */}
          <div>

            <label className="block mb-2 text-sm text-zinc-300"> Email Address </label>

            <div className="flex items-center gap-3 px-4 h-12 rounded-lg bg-black/30 border border-zinc-700 focus-within:border-purple-500 transition">

              <FiMail className="text-zinc-400" />

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-600"
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div>

            <label className="block mb-2 text-sm text-zinc-300"> Password </label>

            <div className="flex items-center gap-3 px-4 h-12 rounded-lg bg-black/30 border border-zinc-700 focus-within:border-purple-500 transition">

              <FiLock className="text-zinc-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full bg-transparent outline-none text-white placeholder:text-zinc-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-zinc-400 hover:text-white transition"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>

            </div>

          </div>

          {/* REMEMBER + FORGOT */}

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">

              <input type="checkbox" className="accent-purple-600" />

              Remember me

            </label>

            <button type="button" className="text-purple-400 hover:text-purple-300 transition">
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-purple-700 hover:bg-purple-800 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/20">
            Login
          </button>

        </form>

        {/* SIGN UP */}

        <p className="text-center text-sm text-zinc-400 mt-7">

          Don't have an account?

          <Link to="/" className="ml-2 text-purple-400 hover:text-purple-300 transition"> Create Account </Link>

        </p>

      </div>

    </section>

  );

};

export default Login;