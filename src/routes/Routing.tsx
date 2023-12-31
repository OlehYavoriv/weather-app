import { Routes, Route } from "react-router-dom";
import { IntroPage } from "../pages/IntroPage";
import { WeatherPage } from "../pages/WeatherPage";
import { BookmarkPage } from "../pages/BookmarkPage";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<IntroPage/>}/>
            <Route path='/weather' element={<WeatherPage/>}/>
            <Route path='/saved' element={<BookmarkPage/>}/>
        </Routes>
    );
};
