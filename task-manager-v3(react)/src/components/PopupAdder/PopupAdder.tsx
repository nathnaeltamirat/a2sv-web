import { useState } from "react";
import "./PopupAdder.css";
interface Props {
  toggler: boolean;
  onAddTask: (task: string) => void;
  onToggler: (toggle: boolean) => void;
}
const PopupAdder = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const submitHandle = () => {
    if (value.trim()) {
      props.onAddTask(value);
      setValue("");
      props.onToggler(false);
    }
  };

  return (
    <>
      {props.toggler && (
        <>
          <div className="cover"></div>
          <div id="popup">
            <h2 id="edit">New Task</h2>
            <input
              id="adding"
              placeholder="Input your task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div id="confirmation">
              <button id="cancel" onClick={() => props.onToggler(false)}>
                {" "}
                CANCEL{" "}
              </button>
              <button id="apply" onClick={submitHandle}>
                {" "}
                APPLY{" "}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopupAdder;
