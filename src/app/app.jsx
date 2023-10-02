import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Footer from "../pages/home/footer/Footer";
import Header from "../pages/home/header/Header";
import Games from "../pages/games/Games";
import Login from "../pages/login/Login";
import Registration from "../pages/login/Registration";
import Quizzes from "../pages/quizzes/Quizzes";
import About from "../pages/about/About";

const App = () => {
    return <div className="">
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
        <Footer />
    </div>
}

export default App;