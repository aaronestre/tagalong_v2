import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import GroqChat from "../pages/Tutor/GroqChat";
import Vocab from "../pages/Vocab/Vocab";

function RouterSwitcher() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/chat" element={<GroqChat />} />
        <Route path="/vocab" element={<Vocab />} />
      </Routes>
    </>
  );
}
export default RouterSwitcher;
