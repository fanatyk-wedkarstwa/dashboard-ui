import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from "./Components/Navbar"
import Topbar from "./Components/Topbar"
import Dashboard from "./Pages/Dashboard"
import Team from "./Pages/Team"
import Contacts from "./Pages/Contacts"
import Invoices from "./Pages/Invoices"
import Profile from "./Pages/Profile"
import Calendar from "./Pages/Calendar"
import FAQ from "./Pages/FAQ"
import Bar from "./Pages/Bar"
import Pie from "./Pages/Pie"
import Line from "./Pages/Line"
import Geography from "./Pages/Geography"

createRoot(document.getElementById('root')).render(
  <>

    <BrowserRouter>
      <Navbar />
      <div className="w-full h-screen flex flex-col">
        <Topbar />
        <div className="bg-basic-dark flex-1 p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  </>
)
