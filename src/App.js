import logo from "./logo.svg";
import "./App.css";
import DynamicForm from "./Component/DynamicForm";
import formConfig from "./config/config";

function App() {
  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dynamic Form</h1>
        <DynamicForm config={formConfig} onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
