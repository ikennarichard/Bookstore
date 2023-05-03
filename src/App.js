import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/categories" element={<h2>Categories</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
