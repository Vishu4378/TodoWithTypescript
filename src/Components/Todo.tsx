import React from "react";

export default function Todo({ todos, compTodo }:{todos:string[],compTodo:Function}) {
  function handelClick(index:number) {
    // console.log("hii");
    compTodo(index);
  }
  return (
    <>
      <div>
        <p className="font-semibold text-gray-800 text-lg mt-8">Things to do</p>
      </div>
      <div className="my-3 ">
        {todos?.length ? (
          todos.map((todo, index) => (
            <div key={index} className="flex space-x-3">
              <input
                type={"checkbox"}
                className="w-4 border-gray-50   accent-pink-500 "
                onClick={() => handelClick(index)}
              ></input>
              <p className="text-gray-800 font-semibold">{todo}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No todos here !</p>
        )}
      </div>
    </>
  );
}
