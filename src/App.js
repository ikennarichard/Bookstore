import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
