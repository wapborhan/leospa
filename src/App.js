import logo from "./assets/img/screencapture.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert(" \n \n \n \n \n  সাইট ডিজাইন চলছে এটা ডেমো। \n \n \n ");
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
