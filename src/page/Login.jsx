import { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/lottie/login (2).json";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signUser, googleLogin, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message || "Login failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message || "Google login failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>
          news paper || Login
        </title>
      </Helmet>
      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-10/12 mx-auto">
          {/* Lottie Animation */}
          <div className="w-full max-w-md">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>

          {/* Login Form */}
          <div className="card bg-white w-full max-w-md shadow-2xl rounded-xl p-8">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
              Login Now!
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-indigo-500 hover:text-indigo-700 flex items-center justify-center"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <label className="label mt-2">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 rounded-lg text-lg font-medium"
                >
                  Login
                </button>
              </div>

              {/* Google Login Button */}
              <div className="form-control">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="btn btn-outline btn-secondary w-full py-3 rounded-lg text-lg font-medium"
                >
                  <span className="mr-2"><FaGoogle></FaGoogle></span> Login with Google
                </button>
              </div>
              <p className="text-center">
                {" "}
                Don't have an account?{" "}
                <Link className="font-semibold" to="/register">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
