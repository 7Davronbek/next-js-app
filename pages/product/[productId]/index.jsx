import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {
    const route = useRouter()
    const productId = route.query.productId
    return (
        <div>ProductDetail number {productId}</div>
    )
}

export default ProductDetail