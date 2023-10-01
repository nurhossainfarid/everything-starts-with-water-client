import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Footer from "../pages/home/footer/Footer";
import Header from "../pages/home/header/Header";
import Games from "../pages/games/Games";
import Login from "../pages/login/Login";
import Registration from "../pages/login/Registration";

const App = () => {
    return <div className="">
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
    </div>
}

export default App;