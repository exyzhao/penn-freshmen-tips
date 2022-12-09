import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Academics from "./views/Academics"
import Transport from "./views/Transport"

const App = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/transport" element={<Transport />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
