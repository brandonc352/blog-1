import Navbar from './components/navbar/Navbar.js'
import HomePage from './components/pages/HomePage'
import CreatePage from './components/pages/CreatePage'
import ListPages from './components/pages/ListPages'
import DisplayPage from './components/pages/DisplayPage'
import EditPage from './components/pages/EditPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/list-pages" element={<ListPages />} />
          <Route path="/page/:id" element={<DisplayPage />} />
          <Route path="/page/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </ >
  );
}

export default App;