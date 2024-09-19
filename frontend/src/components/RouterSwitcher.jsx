import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import GroqChat from "./GroqChat";

function RouterSwitcher() {
  return (
    <>
      <Routes>
        <Route path="/error" element={<NotFound />} />
        <Route path="/chat" element={<GroqChat />} />
      </Routes>
    </>
  );
}
export default RouterSwitcher;
