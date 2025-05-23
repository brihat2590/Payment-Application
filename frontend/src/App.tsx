import Dashboard from "./components/Dashboard";
import LandingPage from "./components/Landing";
import Land from "./components/nextpage"
import NotFoundPage from "./components/nopage";
import PrivateRoute from "./components/privateRoute";
import { SendMoney } from "./components/SendMoney";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Features from "./LandingComp/features";
import SearchFunc from "./components/SearchFucn";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="signin" element={<Signin/>}></Route>
        <Route path="/features" element={<Features/>}/>
        <Route path="/search" element={<SearchFunc/>}/>
        <Route path="/" element={<Land/>}/>

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
          
          }></Route>
        <Route path="/send" element={<SendMoney/>}></Route>
        <Route path="*" element={<NotFoundPage/>}/>


      </Routes>
    
    
    
    </BrowserRouter>
  )

}