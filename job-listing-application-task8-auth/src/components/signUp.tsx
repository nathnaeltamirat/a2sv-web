"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useState } from "react";
interface Data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "user";
}
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Data>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errorMessage,setErrorMessage] = useState<string>('')
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      fetch("https://akil-backend.onrender.com/signup",options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setErrorMessage('')
            localStorage.setItem("currEmail",formData.email)
            localStorage.setItem("currPassword",formData.password)
            localStorage.setItem("currconfirmPassword",formData.confirmPassword)
            localStorage.setItem("currname",formData.name)
            router.push("/verify");
          }else{
            setErrorMessage(data.message)
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
        <h1 className="text-center font-extrabold text-3xl">Sign Up Today!</h1>
        <div className="border border-gray-300 flex my-2 gap-2 justify-center py-2 px-20">
          <img className="w-4" src="/google.png" alt="" />
          <p>Sign Up with Google</p>
        </div>
        {errorMessage && <p className="text-center text-red-600">{errorMessage}</p>}
        <div className=" flex my-4 gap-2">
          <div className="w-20 my-3 h-0.5 bg-gray-300"></div>
          <p className="text-gray-400">Or sign up with Email</p>
          <div className="w-20 my-3 h-0.5 bg-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <label htmlFor="fullName" className="my-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="name"
              value={formData.name}
              placeholder="Enter your full name"
              className="border px-2 py-2 rounded-md border-gray-300 w-80"
              onChange={handleChange}
              required
            />
          </div>
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
              requried
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
          <div className="flex flex-col my-1">
            <label htmlFor="confirm_password" className="my-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Enter password "
              name="confirmPassword"
              value={formData.confirmPassword}
              className="border px-2 py-2 rounded-md border-gray-300 w-80"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className=" text-center px-40 py-2 my-3 text-white rounded-3xl bg-indigo-950"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </form>
        <p className="text-gray-400 mr-35">
          Already have an account?{" "}
          <Link href='/login' className="text-indigo-950 cursor-pointer">Login</Link>
        </p>
        <p className="mt-5 w-90 text-xs text-gray-400 ">
          By clicking 'Continue', you acknowledge that you have read and
          accepted our <span className="text-indigo-950">Terms of Service</span>{" "}
          and <span className="text-indigo-950">Privacy Policy</span>.
        </p>
      </div>
    </>
  );
};

export default SignUp;
