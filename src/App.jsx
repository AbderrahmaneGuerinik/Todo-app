import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { TodosProvider } from "./components/TodoContext";

function App() {
  return (
    <TodosProvider>
      <Header />
      <Main />
    </TodosProvider>
  );
}

export default App;
