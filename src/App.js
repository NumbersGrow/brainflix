import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
// import VideoFrame from "./components/VideoFrame/VideoFrame";

// import MainVideos from "./components/MainVideos/MainVideos";
// import Poster from "./components/Poster/Poster";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos/:videoId" element={<HomePage/>} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;