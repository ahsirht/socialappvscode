import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login.jsx"
import SignUpIndex from "./pages/signup/SignUpIndex.jsx"
import PostSection from "./pages/post-page/index.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUpIndex />} />
        <Route path="/post" element={<PostSection />} />
      </Routes>
    </Router>
  )
}

export default App
