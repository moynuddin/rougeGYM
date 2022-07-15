import "./App.scss";
import Home from "./Pages/Home";
function App() {
  console.log("API key", process.env.REACT_APP_API_KEY);
  return <Home />;
}

export default App;
