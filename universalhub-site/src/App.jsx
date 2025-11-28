import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialWidget from './components/SocialWidget'
import BackToTopButton from './components/BackToTopButton'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <SocialWidget />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
