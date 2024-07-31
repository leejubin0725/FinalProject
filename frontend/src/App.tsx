import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Signin from "./pages/SigninPage";
import Landing from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage"; // 추가된 부분

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
      case "/upload": // 추가된 부분
        title = "Upload Video";
        metaDescription = "This is the upload video page description.";
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
      <Route path="/upload" element={<UploadPage />} /> {/* 추가된 부분 */}
    </Routes>
  );
}

export default App;
