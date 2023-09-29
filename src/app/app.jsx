import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Footer from "../pages/home/footer/Footer";
import Header from "../pages/home/header/Header";

const App = () => {
    return <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
        <Footer />
    </div>
}

export default App;