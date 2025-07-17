import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Display from "./Display";
import { useState } from "react";
interface Data {
  fullName: string;
  email: string;
  message: string;
}
const Form = () => {
  const form = useForm<Data>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const [submittedData,setSubmittedData] = useState<Data|null>(null);
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data:Data)=>{
  
        setSubmittedData(data)
    
  }
  return (
    <>
      <div className="container">
        <div className="left">
          <img src="illustration.png" alt="illustration image" />
        </div>
        <div className="right">
          <h1>Simple Registration Form</h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="fullName">Full Name</label>
            <input
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full Name Required",
                },
              })}
              id="fullName"
              type="text"
              placeholder="John Doe"
            />
            <p className="error">{errors.fullName?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Required",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Must be in a valid email format",
                },
              })}
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
                        <p className="error">{errors.email?.message}</p>
            <label htmlFor="message">Message</label>
            <input
              id="message"
              className="message"
              type="text"
              {...register("message", {
                required: {
                  value: true,
                  message: "Must provide a message",
                },
              })}
              placeholder="Enter your message here..."
            />
            <p className="error">{errors.message?.message}</p>

            <button type="submit">Submit</button>
            <p className="footer">Created for assignment using react form</p>
          </form>
        </div>
      </div>
    <DevTool control={control}/>
      {submittedData && <Display {...submittedData}/>}

    </>
  );
};
export default Form;
