import { useState } from "react"
import {ImQuotesRight,ImQuotesLeft} from "react-icons/im"
// import {FaGreaterThan ,FaLessThan}  from "react-icons/fa"

const Testimonials = (props)=>{
    const review = props.reviews
    const [num , setNum] =useState(0)
    function prevTest(){
      if(num===0){
         setNum(review.length-1)
      }
      else{
         setNum(num-1)
      }
    }
    function nextTest(){
      if(num===review.length-1){
         setNum(0)
      }
      else{
         setNum(num+1)
      }
    }
    return(
        <div className="bg-white  my-5 py-7  px-7 rounded-md  flex justify-center items-center flex-col relative hover:shadow-xl" >
             <div className="absolute w-[5.5rem] h-[5.5rem] bg-purple-500 self-start -top-12 left-[40%] rounded-full lg:-top-12 lg:left-16 "></div>
             <img src={review[num].image} className="absolute w-[5rem] self-start -top-12 left-[40%] rounded-full lg:-top-12 lg:left-16 "></img>
             <div className="self-start mt-7">
                <p className="text-xl font-semibold">{review[num].name}</p>
                <p className="opacity-80 text-gray-600">{review[num].job}</p>
             </div>
             <div className="w-[100%]  flex flex-col items-center">
                <ImQuotesLeft className="opacity-60 text-purple-500"/>
                <p className="self-start opacity-70 text-gray-500 ">{review[num].text}</p>
                <ImQuotesRight className="opacity-60 text-purple-500" />
             </div>
             <div className="flex gap-6 mt-4 px-2 py-1 rounded-3xl items-center justify-center">
                <button className="text-3xl text-gray-500 font-bold" onClick={prevTest}>{"<"}</button>
                <button className="text-3xl text-gray-500 font-bold" onClick={nextTest}>{">"}</button>
             </div>
        </div>

    )
    
}

export default Testimonials