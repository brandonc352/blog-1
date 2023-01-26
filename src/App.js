import Navbar from './components/navbar/Navbar.js'
import HomePage from './components/pages/HomePage'
import CreatePage from './components/pages/CreatePage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-page" element={<CreatePage />} />
        </Routes>
      </div>
    </ >
  );
}

export default App;