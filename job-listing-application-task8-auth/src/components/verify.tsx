"use client";
import { TIMEOUT } from "dns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Data {
  one: string;
  two: string;
  three: string;
  four: string;
}

const Verify = () => {
  const router = useRouter();
  const [seconds,setSeconds] = useState<number>(10);
  const [active,setActive] = useState<boolean>(false);
  useEffect(()=>{
    let interval: NodeJS.Timeout;
        if(!active && seconds >0){
            interval = setTimeout(()=>{
                setSeconds((prev)=>prev-1)
            },1000)   
        }
        if(seconds == 0){
            setActive(true)
        }
  },[active,seconds])
  const [otp, setOtp] = useState<Data>({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const sendOtp = ()=>{

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
                        email:localStorage.getItem("currEmail"),
            password:localStorage.getItem("currPassword"),
            confirmPasswrod:localStorage.getItem("currconfirmPassword"),
            name:localStorage.getItem("currname"),
            role:'user'
          }),
        };
        try {
          fetch("https://akil-backend.onrender.com/signup",options)
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setActive(false)
                setSeconds(10)
                setErrorMessage('')
              }else{
                setErrorMessage(data.message)
              }
            });
        } catch (err) {
          console.log(err);
        }
      };
  
  const [errorMessage, setErrorMessage] = useState<string>("");
  const isOtpComplete = otp.one && otp.two && otp.three && otp.four;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpValue = otp.one + otp.two + otp.three + otp.four;
    const data = {
      email: localStorage.getItem("currEmail"),
      otp: otpValue,
    };
    console.log(localStorage.getItem("currEmail"), otpValue);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    setTimeout(()=>{},30000)
    try {
       fetch("https://akil-backend.onrender.com/verify-email", options)
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
    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex flex-col items-center my-4 ">
        <h1 className="text-center font-extrabold text-3xl">Verify Email</h1>
        <p className="text-gray-400 w-100 text-xs my-5">
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>
        {errorMessage && (
          <p className="text-center text-red-600">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex mt-15 justify-between">
            <input
              type="text"
              placeholder="0"
              className=" pl-8 placeholder:text-gray-400 placeholder:text-2xl py-2 pt-3 rounded-md bg-gray-200 border-indigo-300 border-2 w-20"
              onChange={handleChange}
              name="one"
              value={otp.one}
              maxLength={1}
              pattern="\d*"
              inputMode="numeric"
            />
            <input
              type="text"
              placeholder="0"
              className=" pl-8 placeholder:text-gray-400 placeholder:text-2xl py-2 pt-3 rounded-md bg-gray-200 border-indigo-300 border-2 w-20"
              onChange={handleChange}
              value={otp.two}
              name="two"
              maxLength={1}
              pattern="\d*"
              inputMode="numeric"
            />
            <input
              type="text"
              placeholder="0"
              className=" pl-8 placeholder:text-gray-400 placeholder:text-2xl py-2 pt-3 rounded-md bg-gray-200 border-indigo-300 border-2 w-20"
              onChange={handleChange}
              value={otp.three}
              name="three"
              maxLength={1}
              pattern="\d*"
              inputMode="numeric"
            />
            <input
              type="text"
              placeholder="0"
              className=" pl-8 placeholder:text-gray-400 placeholder:text-2xl py-2 pt-3 rounded-md bg-gray-200 border-indigo-300 border-2 w-20"
              onChange={handleChange}
              value={otp.four}
              name="four"
              maxLength={1}
              pattern="\d*"
              inputMode="numeric"
            />
          </div>
          {active ? <button type='button' onClick ={sendOtp} className="bg-amber-300 p-3 block rounded-2xl my-2 mx-auto ">Send OTP</button> :  <p className="text-center  mt-3 mb-8 text-gray-400">
            You can request to Resend code in <br />
            <span className="text-indigo-800"> {seconds}</span>
          </p>}


          <button
            type="submit"
            disabled={!isOtpComplete}
            className={`text-center px-40 py-2 my-3 text-white rounded-3xl ${
              isOtpComplete
                ? "bg-indigo-950"
                : "bg-indigo-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Verify;
