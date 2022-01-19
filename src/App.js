import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";


function App() {

    const [getPage, setPage] = useState("")

    return (
        <div className="App">

            <BrowserRouter>
                <Toolbar getPage={getPage} setPage={setPage}/>

                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage setPage={setPage}/>}/>
                    <Route path="/login" element={<LoginPage setPage={setPage}/>}/>

                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
