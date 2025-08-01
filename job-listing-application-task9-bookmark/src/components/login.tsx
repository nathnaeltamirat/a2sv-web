"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface Data {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Data>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      fetch("https://akil-backend.onrender.com/login", options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setErrorMessage("");
            localStorage.setItem("accessToken", data.data.accessToken);
            localStorage.setItem("refreshToken", data.data.refreshToken);
            localStorage.setItem("id", data.data.id);
            localStorage.setItem("role", data.data.role);
            router.push("/");
          } else {
            setErrorMessage(data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(
      (prev: Data): Data => ({
        ...prev,
        [name]: value,
      })
    );
  };
  return (
    <>
      <div className="flex flex-col items-center my-4 ">
        <h1 className="text-center font-extrabold text-3xl">Welcome Back!</h1>

        <div className=" flex my-4 gap-2">
          <div className="w-20 my-3 h-0.5 bg-gray-300"></div>
          <p className="text-gray-400 w-20 h-0"></p>
          <div className="w-20 my-3 h-0.5 bg-gray-300"></div>
        </div>
        {errorMessage && (
          <p className="text-center text-red-600">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <label htmlFor="email" className="my-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email address"
              className="border px-2 py-2 rounded-md border-gray-300 w-80"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="password" className="my-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password "
              value={formData.password}
              className="border px-2 py-2 rounded-md border-gray-300 w-80"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className=" text-center px-40 py-2 my-3 text-white rounded-3xl bg-indigo-950"
          >
            Continue
          </button>
        </form>
        <p className="text-gray-400 mr-35">
          Don't have an account?
          <Link href='/signup' className="text-indigo-950 cursor-pointer">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
