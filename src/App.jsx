import Main from "./components/Main";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <main className="flex bg-[#020202] dark:bg-white relative ">
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />

          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </Main>
      </BrowserRouter>
    </main>
  );
}

export default App;
