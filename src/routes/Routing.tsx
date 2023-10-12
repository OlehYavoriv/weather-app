import { Routes, Route } from "react-router-dom";
import { IntroPage } from "../pages/IntroPage";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<IntroPage/>}/>
            <Route path='/weather' element={<p>Weather</p>}/>
        </Routes>
    );
};
