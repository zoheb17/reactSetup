import React from "react";

const App = () => {
  return (
    <>
      <header className="bg-black text-center text-white ">
        <div className="text-white text-6xl">
          <h1 className="p-4">sayyed zoheb</h1>
          <h2 className="p-4">Full stack developer</h2>

        </div>
        <nav className="flex justify-around bg-gray-800  text-3xl ">
          <div className="home">Home</div>
          <div className="about">about</div>
          <div className="experience ">experience</div>
        </nav>

      </header>

      <section className="flex gap-1.5">
        <div className="h-100 w-100 bg-gray-500 text-5xl text-center mx-7 rounded-[2vw]">like to play football</div>
        <div className="h-100 w-100 bg-gray-500 text-5xl text-center">like to  fly kite</div>

      </section>

    </>
  )
}

export default App