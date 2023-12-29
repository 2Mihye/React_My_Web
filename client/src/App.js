import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Movies from "./component/Movie/Movies";
import TodoList from "./component/Todo/TodoList";
import "./App.css";
import NumberGuessingGameLimit from "./component/Game/NumberGuessingGameLimit";
import Quiz from "./component/Game/Quiz";
import Weather from "./component/Weather";

// indexJS가 최상위 js이기 때문에 경로문제로 인해 제일 위에도 bootstrap을 넣어준다.
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="conatainer mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route
              path="/NumberGuessingGameLimit"
              element={<NumberGuessingGameLimit />}
            />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Todo" element={<TodoList />} />
            <Route path="/Weather" element={<Weather />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
