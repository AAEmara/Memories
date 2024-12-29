import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import api from "../api";

function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  function handleChange(e) {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (
      !registerData.email.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      )
    ) {
      newErrors.email = "Invalid Email address";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return; // Stop if form is invalid

    try {
      const response = await api.post("/auth/register", registerData);
      console.log("Registration successful:", response.data); // Log response if success
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      ); // Handle error
      setError({
        form: "An error occurred during registration. Please try again.",
      });
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="h-10 w-auto mr-2" src={logo} alt="logo"></img>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="text"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="John"
                  required={true}
                  autoComplete="firstname"
                  onChange={handleChange}
                  minLength={3}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="text"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Doe"
                  required={true}
                  autoComplete="lastname"
                  onChange={handleChange}
                  minLength={3}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="text"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="username"
                  required={true}
                  autoComplete="username"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="name@email.com"
                  required={true}
                  autoComplete="email"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  required={true}
                  autoComplete="new-password"
                  minLength="8"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                  required={true}
                  autoComplete="new-password"
                  minLength="8"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-gray-900 bg-[#ffdc00] hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-gray-500"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
