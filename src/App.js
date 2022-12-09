import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Academics from "./views/Academics"

const App = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
