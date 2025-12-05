import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./Components/Navbar"
import Topbar from "./Components/Topbar"
import Dashboard from "./Pages/Dashboard"
import Team from "./Pages/Team"


function App() {

   return (
      <>
         <Navbar />
         <div className="w-full h-screen flex flex-col">
            <Topbar />
            <div className="bg-basic-dark flex-1">
               <BrowserRouter>
                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/team" element={<Team />} />
                  </Routes>
               </BrowserRouter>
            </div>
         </div>

      </>
   )
}

export default App
