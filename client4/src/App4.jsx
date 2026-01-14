import  React from "react"

const App=()=>{
  return(
    <>
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 flex justify-center">


  <div className="bg-white max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden">

    
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/register.jpg"
          alt="Profile Photo"
          className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
        />

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-wide">sayyed zohebudddin</h1>
          <p className="text-blue-100 mt-1">
            B.Tech Computer Science | 2nd Year Student
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mt-4">
            <span className="flex items-center gap-1">
              <i data-feather="mail"></i>
              mohdafnaan833@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <i data-feather="phone"></i>
              +91 95759 503729
            </span>
            <span className="flex items-center gap-1">
              <i data-feather="map-pin"></i>
              Hyderabad, India
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

      <aside className="md:col-span-1 space-y-6">

        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Profile</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Passionate Computer Science student focused on building real-world
            applications using modern web technologies. Always eager to learn
            and grow as a developer.
          </p>
        </div>

     
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
            <span className="skill">Tailwind CSS</span>
            <span className="skill">Node.js</span>
            <span className="skill">MongoDB</span>
          </div>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Hobbies</h2>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>🎮 Playing games</li>
            <li>🍽 Eating biryani</li>
            <li>🔥 Playing BGMI</li>
            <li>🪁 Kite flying</li>
          </ul>
        </div>

      </aside>

      
      <main className="md:col-span-2 space-y-6">

    
        <section>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Education
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
            <h3 className="font-semibold">Bachelor of Technology (B.Tech)</h3>
            <p className="text-sm text-gray-600">
              Computer Science Engineering • 2nd Year
            </p>
          </div>
        </section>

      
        <section>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Projects
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold">Blog Application</h3>
              <p className="text-sm text-gray-600">
                Built using Express.js & MongoDB with full CRUD functionality.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold">Food Delivery System</h3>
              <p className="text-sm text-gray-600">
                Designed schemas for users, restaurants, riders, and orders with
                complete order flow.
              </p>
            </div>
          </div>
        </section>

        
        <section>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Favorite Food
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            <li>Tahari</li>
            <li>Biryani</li>
            <li>Pasta</li>
          </ul>
        </section>

        <section className="border-t pt-4">
          <p className="text-sm text-gray-600">
            I hereby declare that the information provided above is true and
            correct to the best of my knowledge.
          </p>
        </section>

      </main>
    </div>
  </div>





</div>
    </>
  )
}
export default App