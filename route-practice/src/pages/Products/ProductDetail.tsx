import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetail = () => {
  const [item, setItem] = useState<Product | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setItem(data)
    }

    getProduct()
  }, [id])

  const handleBack = () => {
    navigate('/products')
  }

  return (
    <div>
      <p>Product #{id}</p>
      {item && (
        <>
          <h2>{item.title}</h2>
          <img src={item.images} alt="" />
          <p>${item.price}</p>
          <p>{item.description}</p>
        </>
      )}
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default ProductDetail