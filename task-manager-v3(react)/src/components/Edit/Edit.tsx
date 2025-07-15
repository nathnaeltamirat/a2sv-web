import { useState } from "react";
import "./Edit.css";
interface Props {
  toggler: boolean;
  inputValue: string;
  pos: number;
  onEditTask: (task: string, pos: number) => void;
  onToggler: (toggle: boolean) => void;
}
const Edit = (props: Props) => {
  const [value, setValue] = useState<string>(props.inputValue);

  const submitHandle = () => {
    if (value.trim()) {
      props.onEditTask(value, props.pos);
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
            <h2 id="edit">Edit Task</h2>
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

export default Edit;
