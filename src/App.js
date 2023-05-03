import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<h2>Categories</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
