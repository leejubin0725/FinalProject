import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInForm from './components/SignInForm';
import MainPage from './pages/MainPage';
import Movies from './pages/Movies';
import VideoUpload from './pages/VideoUpload';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  // 네비바를 표시할 경로 결정
  const shouldShowNavbar = !['/', '/signin'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </>
  );
}

export default App;
