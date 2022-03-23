import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "../pages/Articles";
import Home from "../pages/Home";
import Materials from "../pages/Materials";
import Projects from "../pages/Projects";

import Menu from  '../components/Menu';
import Toggle from '../components/Toggle';

export const Router = () => {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

    return(
        <BrowserRouter>
            <Toggle handleNavToggle={handleNavToggle}/>
            { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/materials/:id" element={<Materials />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;