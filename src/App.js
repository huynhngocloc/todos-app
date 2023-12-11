
import { Provider } from "react-redux";
import "./App.css";
import Todo from "./Pages/Todo";
import store from "./store";
import Test from "./Pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="test/*" element={<Test />} />
        </Routes>  
      </Provider>
    </BrowserRouter>
  );
}

export default App;
