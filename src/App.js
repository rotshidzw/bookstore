import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/categories';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route
            path="/"
            element={<Books />}
          />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
