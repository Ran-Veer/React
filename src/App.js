import React, { useState } from "react";


function App() {
  const [count, setCount]= useState(0)
  return (
    <>
    <div className=" border-2 w-[50%] m-[auto] h-[100%] mt-[6rem]">
      <h1 className="text-[2rem] text-center text-white mt-[2rem]">Counter App</h1>
      <h4 className="text-center mt-[1.5rem] text-[1.5rem] text-[yellow]">{count}</h4>
      <div className="flex flex-row justify-center items-center mt-[3rem] w-[60%] m-[auto] justify-between mb-[2rem]">
      <button className="hover:bg-green-600 rounded-md bg-green-500 text-white px-[.8rem] py-[.4rem]" onClick={() => setCount (count + 1) }>Increase</button>
      <button className="hover:bg-red-600 rounded-md bg-red-500 text-white px-[.8rem] py-[.4rem]" onClick={() => setCount (count - 1) } disabled={count === 0}>Decrease</button>
      <button className="hover:bg-slate-400 rounded-md bg-slate-300 text-black px-[.7rem] py-[.4rem]" onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
      </div>
    </div>
  </>
  );
}

export default App;
