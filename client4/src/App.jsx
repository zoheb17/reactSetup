import React from "react";

const App=()=>{
  return(
    <>
     <h1 className="text-5xl underline text-center">My photo</h1>
   <div className="bg-cyan-950">
     
    <img  className="h-100 w-100 rounded-full object-cover mx-auto mt-7 blur-sm border-2 " src="z.jpeg" alt="This is my photo" srcset="" />
   </div>
    </>
  )
}
export default App