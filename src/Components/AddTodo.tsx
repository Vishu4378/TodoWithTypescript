import React, { useState,ChangeEvent, FC } from "react";


type AddTodoProps={
    getTodo:Function,
    hide:Function,
    hideBtn:Function,
}
const AddTodo: FC<AddTodoProps>=({ getTodo, hide, hideBtn })=> {
  const [value, setValue] = useState<string>("");
  const [val, setval] = useState(false);
  const [valBtn, setvalBtn] = useState(true);

  const handelValue = (event:ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // console.log("space", e.target.value);
  };

  const handelsave = () => {
    getTodo(value);
    hide(val);
    hideBtn(valBtn);
  };

  return (
    <>
      <div className="border-x border-b p-4 space-y-5 shadow-gray-300 rounded shadow-sm m-2">
        <p className="font-semibold text-gray-800 text-lg">Create a todo</p>
        <div className="w-full sm:max-w-xs">
          <label htmlFor="newTodo" className="sr-only">
            New todo
          </label>
          <input
            required
            id="newTodo"
            type={"text"}
            value={value}
            onChange={handelValue}
            placeholder="Write an article about XState"
            className=" w-full border-gray-300 focus:outline-none border p-2  rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:border-2 sm:text-sm"
          ></input>
        </div>
        <div className="space-x-3">
          {value ? (
            <button
              className="text-white px-4 py-2 bg-pink-500 text-sm font-medium rounded-md"
              onClick={handelsave}
            >
              Save
            </button>
          ) : (
            <button
              disabled
              className="text-white px-4 py-2 bg-pink-400 text-sm font-medium rounded-md"
              onClick={handelsave}
            >
              Save
            </button>
          )}

          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 text-sm font-medium px-3 py-2 border border-gray-300 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodo