import BlurLayout from "./components/BlurLayout";
import Form from "./components/Form";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      <Form />
      <BlurLayout>
        <Menu />
      </BlurLayout>
    </>
  );
}

export default App;
