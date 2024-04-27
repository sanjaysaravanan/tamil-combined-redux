import { Provider } from "react-redux";

import "./App.css";

import store from "./store/store.js";
import Counter from "./Counter.jsx";
import Movement from "./Movement.jsx";
import Products from "./Products.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Products />
      <Counter />
      <Movement />
    </Provider>
  );
}

export default App;
