import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import PageNotFound from "../utils/PageNotFound";
import Home from "../pages/Home/Home";
import Enroll from "../pages/Enroll/Enroll";




export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    );
}
