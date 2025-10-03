import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [warn, setWarn] = useState("")
  
  const maxValue = 100;
  const inc = () => {
    if(count + step > maxValue){
      setWarn(`⚠️ Cannot exceed ${maxValue}`);
    }else{
      setCount(count + step);
      setWarn("");
    }
  };
  const dec = () =>  {
    if(count - step < 0){
      setWarn("⚠️ Cannot go below 0");
    }else{
      setCount(count - step);
      setWarn("");
    }

  };
  const res = () =>  {
    setCount(0);
    setWarn("");
  };
  return (
    <>
      <div className="flex text-white flex-col justify-center items-center bg-blue-500 p-6 m-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-3">Counter</h1>
        <h2 className="text-6xl font-extrabold">{count}</h2>

        {/* Warning Message */}
        {warn && (
          <p className="text-yellow-300 font-semibold mt-2">{warn}</p>
        )}

        {/* Input Box */}
        <div className="mb-6 mt-3 text-center">
          <label className="mt-3">Step Size</label>
          <input
            type="number"
            value={step}
            min={1}
            className="text-center w-full rounded-lg mt-2 px-3 text-black py-2"
            placeholder="Enter Steps"
           onChange={(e) => {
      const value = Number(e.target.value);
     setStep(value < 1 ? 1 : value);
    }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-x-3">
          <button
            onClick={inc}
            className="px-3 py-2 bg-green-500 hover:bg-green-600 transition rounded-lg text-black"
          >
            Increment
          </button>
          <button
            disabled={count <= 0}
            onClick={dec}
            className="hover:bg-red-600 transition disabled:opacity-50 px-3 py-2 bg-red-500 rounded-lg text-white"
          >
            Decrement
          </button>
          <button
            className="px-3 py-2 transition bg-amber-500 hover:bg-amber-600 rounded-lg text-black"
            onClick={res}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
