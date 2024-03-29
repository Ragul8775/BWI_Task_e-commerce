import React, { useState } from "react";
import Logo from "../assets/CartFusion-logos_transparent.png";
import { useAuth } from "../context/login";
import { CgDanger } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  console.log("Username, password:", userName, password);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          username: userName,
          password: password, //"username":"rshawe2","password":"OWsTbMUgFc"
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        login(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login Failed", error);
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="bg-stone-200 flex flex-col items-center justify-center  md:py-2 bg-gradient-to-r from-primary to-secondary min-h-screen">
      <main className="flex flex-col items-center w-full px-2 md:px-32 md:flex-row">
        <div className="hidden md:flex flex-col flex-1 space-y-6 w-full md:w-1/2">
          <p className="text-6xl text-red-600 font-bold">CartFusion</p>
          <p className="font-medium text-lg leading-6 text-light">
            CartFusion: Revolutionizing Your Shopping Experience with One Click.
          </p>
        </div>
        <div className="bg-gradient-to-r from-slate-100 to-light rounded-2xl py-14  shadow-2xl flex flex-col w-3/4 md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <div className="flex flex-col px-6 md:px-10 py-4 items-center">
            <img
              src={Logo}
              className="w-auto h-20 bg-transparent "
              alt="CartFusion logo"
            />
            <p className="text-[10px] md:hidden text-black font-semibold">
              Revolutionizing Your Shopping Experience with One Click
            </p>
          </div>
          <div className="w-2/3">
            <form className="" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-primary " htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full p-2 mb-6 text-blue-700 border-b-2 border-primary outline-none "
                  type="text"
                  name="username"
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-primary" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full p-2 mb-6 text-blue-700 border-b-2 border-primary outline-none "
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
              </div>
              <div>
                <input
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 mb-6 rounded"
                  type="submit"
                  value="Login"
                />
              </div>
              {error && (
                <div className="bg-red-400 rounded p-2 flex justify-center items-center transition ease-in-out duration-300">
                  <CgDanger className="text-red-800 w-6" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
