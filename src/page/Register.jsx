import Lottie from "lottie-react";
import lottieRegister from "../assets/lottie/register (2).json";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
  const { createUser, setUser, loginGoogle } = useContext(AuthContext);
  const [errorPassWord, setErrorPassword] = useState();
  const [showPassword, setShowPassword] = useState(false); // Password Toggle
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // Password Validation
    if (!/[A-Z]/.test(password)) {
      setErrorPassword("Password must include at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorPassword("Password must include at least one lowercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setErrorPassword("Password must include at least one number.");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setErrorPassword(
        "Password must include at least one special character (!@#$%^&*)."
      );
      return;
    } else if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters long.");
      return;
    } else {
      setErrorPassword("");
    }

    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Post user data to the server
            axios.post(`http://localhost:5000/users?email=${email}`, {
              name,
              email,
              photo
            });
            setUser(user); 
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration successful!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          })
          .catch((updateError) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Profile update error: ${updateError.message}`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${error.message}`,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
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
          icon: "error",
          title: "Oops...",
          text: `Google login failed: ${error.message}`,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title> News Paper || Registered</title>
      </Helmet>
      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* Lottie Animation */}
          <div className="text-center lg:text-left w-full max-w-md">
            <Lottie animationData={lottieRegister} loop={true} />
          </div>

          {/* Card with Form */}
          <div className="card bg-white shadow-2xl w-full max-w-3xl mx-auto rounded-xl p-8">
            <form onSubmit={handleRegister} className="card-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name Input Field */}
                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text text-lg font-medium">
                      Full Name
                    </span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered input-primary w-full py-4 px-6 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    required
                  />
                </div>

                {/* Email Input Field */}
                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text text-lg font-medium">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered input-primary w-full py-4 px-6 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    required
                  />
                </div>

                {/* Password Input Field */}
                <div className="form-control relative">
                  <label className="label mb-2">
                    <span className="label-text text-lg font-medium">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input input-bordered input-primary w-full py-4 px-6 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                      required
                    />
                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Profile Photo URL Input Field */}
                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text text-lg font-medium">
                      Profile Photo URL
                    </span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Enter your profile photo URL"
                    className="input input-bordered input-primary w-full py-4 px-6 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    required
                  />
                </div>
              </div>
              {errorPassWord && (
                <p className="text-red-600 font-bold"> {errorPassWord} </p>
              )}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full py-3 rounded-lg text-lg font-medium">
                  Register
                </button>
              </div>
              {/* Google Login Button */}
              <div className="form-control">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="btn btn-outline btn-secondary w-full py-3 rounded-lg text-lg font-medium"
                >
                  <span className="mr-2">
                    <FaGoogle></FaGoogle>
                  </span>{" "}
                  Login with Google
                </button>
              </div>
            </form>

            <p className="text-center">
              Already have an account?{" "}
              <Link className="font-semibold" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
