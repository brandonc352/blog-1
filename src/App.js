import Navbar from './components/navbar/Navbar.js'
import HomePage from './components/pages/HomePage'
import CreatePage from './components/pages/CreatePage'
import ListPages from './components/pages/ListPages'
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
        </Routes>
      </div>
    </ >
  );
}

export default App;