import Navbar from './component/Navbar/Navbar';
import './App.css';
import Container from './component/Body/Container';
import ContextProvider from './context/ContextProvider';
import FirstPage from './component/FirstPage/FirstPage';
import Bodypage from './component/FirstPage/Bodypage';
import Login from './component/Create Account/Login';
import SignUp from './component/Create Account/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maincontainer from './component/Body/Maincontainer';
import ViewProfile from './component/Profile Section/ViewProvile';
import Form1 from './component/Profile Section/Forms/Form1';

function App() {
  return (

    <>
    <ContextProvider>

      {/* <Bodypage/> */}

      {/* <Navbar/> 
      <ViewProfile/> */}
      {/* <Form1/> */}
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          
          
          <Route path="/home" element={<Maincontainer />} />
           <Route path = "/view_profile" element = {
            <>
            <Navbar/>
            <ViewProfile/>
            </>
           
           } />
          
          


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        


        </Routes>
      </BrowserRouter>




      

    </ContextProvider>

    </>
  );
}

export default App;
