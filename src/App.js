// 1. Set up your React application with React Router and Redux Toolkit.
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
import DetailPage from "./DetailPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
