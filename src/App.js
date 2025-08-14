import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { Movies } from "./components/Movies";

function App() {
  return (
    <>
      <Header />
      <Movies />
      <Main />
      <Footer />
    </>
  );
}

export default App;
