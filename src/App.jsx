import { useState } from "react";
import BlurLayout from "./components/BlurLayout";
import Form from "./components/Form";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  return (
    <>
      <Header onMenu={handleMenu} />
      <Form />
      {openMenu && (
        <BlurLayout>
          <Menu onMenu={handleMenu} />
        </BlurLayout>
      )}
    </>
  );
}

export default App;
