import "./App.scss";
import Home from "./Pages/Home";
function App() {
  console.log("API key", process.env.REACT_APP_EXERCISE_API_KEY);
  console.log("API host", process.env.REACT_APP_HOST);
  return <Home />;
}

export default App;
