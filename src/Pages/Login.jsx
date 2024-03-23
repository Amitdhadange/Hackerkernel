import React, { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", JSON.stringify(data.token));
        setIsLoggedIn(true);
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-96 border-2 rounded-lg shadow-lg border-slate-400 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center gap-8"
        >
          <h1 className="font-serif text-3xl ml-20 text-blue-500">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-slate-500 p-2 px-8 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-slate-500 p-2 px-8 rounded "
          />

          <button
            onClick={handleSubmit}
            className="border-2 p-3 px-16  mt-6 bg-blue-600 hover:scale-105 transition-all duration-300 hover:text-white rounded-2xl border-slate-500 font-semibold text-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
