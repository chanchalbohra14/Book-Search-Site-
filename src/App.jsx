import "./index.css";
import { AppProvider } from "./Context.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import BookList from "./Components/BookList/BookList.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/book" element={<BookList />}></Route>
          <Route path="/book/:id" element={<BookDetails />}></Route>
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
