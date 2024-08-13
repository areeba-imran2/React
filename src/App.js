import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import MyComponent1 from "./components/MyComponent1";


function App() {
  return (
    <>
      <Navbar title="ReactApp"/>
      <div className="container">
      <TextForm heading="Enter the text"/> 
      <MyComponent1/>
      </div>

    </>
  );
}

export default App;
