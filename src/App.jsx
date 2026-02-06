import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import GridLayout from "./components/GridLayout";
import Home from "./pages/Home";
import Feed from "./pages/Feed";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<GridLayout handleMenu={handleMenu} openMenu={openMenu} />}
        >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
