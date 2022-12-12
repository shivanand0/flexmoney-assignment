import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import MuiAlert from './Components/Alert/MuiAlert'
function App() {
  return (
    <>
    <Header title="Yolo" />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <MuiAlert />
    </Router>
    <Footer />
    </>
  )
}

export default App
