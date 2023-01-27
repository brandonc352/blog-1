import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import CreatePage from "./components/pages/CreatePage";
import AllPages from "./components/pages/AllPages";
import DisplayPage from "./components/pages/DisplayPage";
import EditPage from "./components/pages/EditPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/list-pages" element={<AllPages />} />
          <Route path="/page/:id" element={<DisplayPage />} />
          <Route path="/page/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
