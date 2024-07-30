import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInForm from './components/SignInForm';
import MainPage from './pages/MainPage';
import Movies from './pages/Movies';
import VideoUpload from './pages/VideoUpload';
import Navbar from './components/Navbar';
import AuthCallback from './pages/AuthCallback';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
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
        <Route path="/login" element={<SignInForm />} /> {/* 로그인 페이지 라우트 추가 */}
        <Route path="/oauth2/callback" element={<AuthCallback />} />
      </Routes>
    </>
  );
}

export default App;
