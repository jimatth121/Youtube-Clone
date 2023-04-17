// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommendation from "./Recommendation";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search"
            element={
              <div className="app__body">
              <Sidebar />
              <SearchPage/>
            </div>
            }
          ></Route>

          <Route
            path="/"
            element={
              <div className="app__body">
              <Sidebar />
              <Recommendation />
            </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <div className="app__body">
        <Sidebar />
        <Recommendation />
      </div> */}
    </div>
  );
}

export default App;
