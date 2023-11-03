import "typeface-roboto";
import "./assets/css/styles_global.css";
import { Navigator } from "./components/navigator";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navigator />
      </Router>
    </>
  );
}
export default App;