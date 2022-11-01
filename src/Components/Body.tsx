import React, { useState, useCallback } from "react";
import AddTodo from "./AddTodo";
import CompTodo from "./CompTodo";
import Todo from "./Todo";

export default function Body() {
  const [todos, setTodos] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [CompleteTodos, setCompleteTodos] = useState<string[]>([]);

  function getTodo(val:string) {
    const newTodo = todos.concat(val);
    setTodos(newTodo);
  }
  function hide(val:boolean) {
    // console.log("hide", val);
    setShow(val);
  }
  function hideBtn(val:boolean) {
    setShowBtn(val);
  }
  function handelRefresh() {
    setCompleteTodos([]);
    setTodos([]);
  }
  function compTodoClick(i:number) {
    // console.log("key ", i);
    const newTodos = CompleteTodos.filter(function (el, id) {
      return i == id;
    });
    const newCompTodos = CompleteTodos.filter(function (el, id) {
      return i != id;
    });
    setTodos(todos.concat(newTodos));
    setCompleteTodos(newCompTodos);
  }

  function handelCompleteTodo(i:number) {
    // console.log("key ", i);
    const newCompTodos = todos.filter(function (el, id) {
      return i == id;
    });
    const newTodos = todos.filter(function (el, id) {
      return i != id;
    });
    setTodos(newTodos);
    setCompleteTodos(CompleteTodos.concat(newCompTodos));
  }
  return (
    <>
      <div className="px-2 sm:px-6 lg:px-8">
        <div className=" md:flex md:items-center md:justify-between mt-10">
          <p className="text-3xl font-bold leading-tight text-gray-900">
            Things to get done
          </p>
          <button
            type="button"
            className=" mt-4 md:mt-0 md:ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-pink-600 disabled:hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            onClick={handelRefresh}
          >
            Refresh
          </button>
        </div>
        <Todo todos={todos} compTodo={handelCompleteTodo}></Todo>

        <div>
          {showBtn ? (
            <button
              className="rounded-3xl my-5 px-4 py-2 flex items-center justify-center font-semibold text-sm text-white bg-pink-500 focus:ring-pink-400 focus:ring-offset-2 focus:ring-2 focus:outline-none"
              onClick={function () {
                setShow(true);
                setShowBtn(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="-ml-0.5 mr-2 h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add a todo
            </button>
          ) : null}
        </div>
        {show ? (
          <AddTodo hide={hide} hideBtn={hideBtn} getTodo={getTodo}></AddTodo>
        ) : null}
        <CompTodo
          compTodoClick={compTodoClick}
          compTodos={CompleteTodos}
        ></CompTodo>
      </div>
    </>
  );
}
