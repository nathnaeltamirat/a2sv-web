import { useState } from "react";
import "./Adder.css";
import PopupAdder from "../PopupAdder/PopupAdder";
interface Props{
    onAddTask: (task:string)=>void;
}
const Adder = (props:Props) => {
  const [clicked,setClicked] = useState<boolean>(false)

  const handleClick = ()=>{
    if(clicked == false){
        setClicked(true)
    }
  }
  const toggler = (toogle:boolean)=>{
    setClicked(toogle)
  }
  return (
    <>
      <svg
        id="add_task"
        xmlns="http://www.w3.org/2000/svg"
        width="116"
        height="108"
        viewBox="0 0 116 108"
        fill="#6C63FF"
        onClick={()=>handleClick()}
      > 
        <path
          d="M58 0C25.9597 0 0 24.1694 0 54C0 83.8306 25.9597 108 58 108C90.0403 108 116 83.8306 116 54C116 24.1694 90.0403 0 58 0ZM91.6774 60.0968C91.6774 61.5339 90.4145 62.7097 88.871 62.7097H67.3548V82.7419C67.3548 84.179 66.0919 85.3548 64.5484 85.3548H51.4516C49.9081 85.3548 48.6452 84.179 48.6452 82.7419V62.7097H27.129C25.5855 62.7097 24.3226 61.5339 24.3226 60.0968V47.9032C24.3226 46.4661 25.5855 45.2903 27.129 45.2903H48.6452V25.2581C48.6452 23.821 49.9081 22.6452 51.4516 22.6452H64.5484C66.0919 22.6452 67.3548 23.821 67.3548 25.2581V45.2903H88.871C90.4145 45.2903 91.6774 46.4661 91.6774 47.9032V60.0968Z"
          fill="#6C63FF"
        />
      </svg>
      <PopupAdder onToggler={toggler} onAddTask = {props.onAddTask} toggler = {clicked}/>
    </>
  );
};

export default Adder;
