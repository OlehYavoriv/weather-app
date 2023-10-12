import { Routes, Route } from "react-router-dom";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<p>Weather</p>}/>
        </Routes>
    );
};
