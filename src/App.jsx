import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tudum from "./pages/Tudum";
import Splash from "./pages/Splash";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
    <Route path="/" element={<Tudum />} />
    <Route path="/splash" element={<Splash />} />
    <Route path="/profiles" element={<Profiles />} />
    <Route path="/home" element={<Home />} />
</Routes>
        </BrowserRouter>
    );
}

export default App;