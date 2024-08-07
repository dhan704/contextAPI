import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./ComponentC";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Rahul">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
