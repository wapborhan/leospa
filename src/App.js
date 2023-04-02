import { Fragment } from "react";
import Header from "./components/Header";
import About from "./home/About";
import Procedures from "./home/Procedures";
import Testimoinal from "./home/Testimoinal";
import Team from "./home/Team";
import Appoinment from "./home/Appoinment";
import Contact from "./home/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Procedures />
      <Testimoinal />
      <Team />
      <Appoinment />
      <Procedures />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
