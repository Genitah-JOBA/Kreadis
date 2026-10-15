import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Header, ScrollManager } from './components/Layout'
import Home from './pages/Home'
import Project from './pages/Project'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:slug" element={<Project />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
