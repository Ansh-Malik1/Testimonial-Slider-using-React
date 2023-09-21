import React from "react";
import Testimonials from "./components/Testimonial"
import reviews from "./data";

const App = () => {
  return (
  <div className = "flex flex-col justify-center items-center bg-gray-200 w-[100vw] h-[100vh]">
    <div className="w-[90%] flex flex-col justify-center h-[90%] items-center gap-12  lg:w-[50%]  ">
      <h1 className="text-center font-bold text-2xl">Our Testimonials <div className="w-[60%] h-[2px] bg-slate-500 m-auto lg:w-[50%]"></div></h1>
      <Testimonials reviews={reviews}/>
    </div>
  </div>
  )
}

export default App;
