import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Header />
      <Title/>
      <Banner />
    </div>
  );
}

export default App;
