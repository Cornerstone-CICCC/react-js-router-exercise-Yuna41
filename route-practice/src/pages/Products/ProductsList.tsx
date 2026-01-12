import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { Link } from "react-router-dom"

const ProductsList = () => {
  const [items, setItems] = useState<Product[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      setItems(data.products)
    }

    getProducts()
  }, [])
  
  return (
    <div>
      <h2>ProductsList</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <Link to={`/products/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList