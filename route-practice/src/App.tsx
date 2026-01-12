import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductsList from "./pages/Products/ProductsList"
import ProductDetail from "./pages/Products/ProductDetail"
import ProductsLayout from "./layouts/ProductsLayout"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App