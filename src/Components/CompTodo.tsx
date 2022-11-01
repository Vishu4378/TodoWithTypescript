import React from "react";

export default function CompTodo({ compTodos, compTodoClick }:{compTodos:string[],compTodoClick:Function}) {
  function handelClick(index:number) {
    // console.log("hii");
    compTodoClick(index);
  }

  return (
    <>
      <div>
        <p className="font-semibold text-gray-800 text-lg mt-4">Things done</p>
      </div>
      <div className="my-3 ">
        {compTodos?.length ? (
          compTodos.map((todo, index) => (
            <div key={index} className="flex space-x-3">
              <input
                checked
                type={"checkbox"}
                onClick={() => handelClick(index)}
                className="w-4 border-gray-50 accent-pink-500 "
              ></input>
              <p className="text-gray-800 font-semibold">{todo}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 ">No todos here !</p>
        )}
      </div>
    </>
  );
}
