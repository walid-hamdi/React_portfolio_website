import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route Component={Home}>
            <Route path="/" />
            <Route path="/home" />
          </Route>
          <Route Component={About} path="/about" />
          <Route Component={NotFound} path="*" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
