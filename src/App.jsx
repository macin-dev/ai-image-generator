import { useState } from "react";
import BlurLayout from "./components/BlurLayout";
import Form from "./components/Form";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ImageView from "./components/ImageView";
import GridLayout from "./components/GridLayout";
import Main from "./components/Main";
import MenuList from "./components/MenuList";
import MenuButton from "./components/MenuButton";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }

  return (
    <GridLayout>
      <Header>
        <MenuButton onMenu={handleMenu} />
        <MenuList />
      </Header>

      <Main>
        <Form />
        <ImageView />
      </Main>

      {openMenu && (
        <BlurLayout>
          <Menu onMenu={handleMenu} />
        </BlurLayout>
      )}
    </GridLayout>
  );
}

export default App;
