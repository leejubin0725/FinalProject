import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Signin from "./pages/SignInPage";
import Landing from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import UploadMovie from "./pages/UploadMovie";
import MovieDetailPage from "./pages/MovieDetailPage";
import Account from "./pages/Account";
import AccountDelete from "./components/AccountDelete";
import LoginPage from "./pages/LoginPage";
import SubscribePage from "./pages/SubscribePage";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Landing Page";
        metaDescription = "This is the landing page description.";
        break;
      case "/signin":
        title = "Sign In";
        metaDescription = "This is the sign-in page description.";
        break;
      case "/dashboard":
      case "/dashboard/movieManage":
      case "/dashboard/insertMovie":
      case "/dashboard/memberManage":
      case "/dashboard/FAQManage":
      case "/dashboard/1on1chat":
        title = "Dashboard";
        metaDescription = "This is the dashboard page description.";
      case "/upload":
        title = "Upload Movie";
        metaDescription = "Upload a new movie.";
        break;
      default:
        title = "Default Title";
        metaDescription = "Default description.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} /> {/* 새로운 경로 추가 */}
      <Route path="/upload" element={<UploadMovie />} />
      <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/subscribe" element={<SubscribePage />} />
    </Routes>
  );
}

export default App;
