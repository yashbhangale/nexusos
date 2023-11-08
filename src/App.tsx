
import{ BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Info from './pages/Info';
import Download from './pages/Download';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/info" element={<Info />} />
        <Route path="/download" element={<Download />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

