import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="App">
      <div id="left-column">
        <SignUp />
      </div>
      <div id="right-column">
        <Login />
        <Notification />
      </div>
    </div>
  );
}

export default App;
