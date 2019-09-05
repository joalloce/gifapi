import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import { Provider } from "react-redux";
import AppNavbar from "./components/AppNavbar";
import GifList from "./components/GifList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <GifList></GifList>
      </div>
    </Provider>
  );
}

export default App;
