import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation } from "react-router";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState("");
  useEffect(() => {
    if (location?.state) {
      setEmail(location?.state);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email).then(() => {
      toast.success("Password reset email sent. Please check your inbox.");
      window.open("https://mail.google.com", "_blank");
    });
  };
  return (
    <div className="min-h-80 md:min-h-[400px] lg:min-h-[480px] flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full mx-4">
        <section className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <form
            onSubmit={handleReset}
            className="mt-10 space-y-4 w-full max-w-md"
          >
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter Your Email"
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Reset Password
            </button>
          </form>
          <Link className="mt-2" to={"/login"}>
            Remember Password ? <span className="text-green-500">Login</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;
