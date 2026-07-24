import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tudum from "./pages/Tudum";
import Splash from "./pages/Splash";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";

function App() {
    return (
        <BrowserRouter>
            <Routes>
    <Route path="/" element={<Tudum />} />
    <Route path="/splash" element={<Splash />} />
    <Route path="/profiles" element={<Profiles />} />
    <Route path="/home" element={<Home />} />
    <Route path="/my-list" element={<MyList />} />
    <Route path="/timeline" element={<Timeline />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/letter" element={<Letter />} />
</Routes>
        </BrowserRouter>
    );
}

export default App;