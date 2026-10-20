import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerPage from './pages/CustomerPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root is intentionally neutral: customer pages are shared by direct link only. */}
        <Route path="/" element={<NotFound />} />
        <Route path="/:slug" element={<CustomerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
