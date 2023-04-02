import { Fragment } from "react";
import Header from "./components/Header";
import About from "./home/About";
import Procedures from "./home/Procedures";
import Testimoinal from "./home/Testimoinal";
import Team from "./home/Team";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Procedures />
      <Testimoinal />
      <Team />
    </Fragment>
  );
}

export default App;
