import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import Offers from "./components/Offers"
import Header from "./components/Header"
 

function App() {
  

  return (
  <>
    <Router>
<Header/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/forgot-password" element={<ForgotPassword/>}/>
     <Route path="/offers" element={<Offers/>}/>
      
      </Routes>
    </Router>
    </>
  )
}

export default App
