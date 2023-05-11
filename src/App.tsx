import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
