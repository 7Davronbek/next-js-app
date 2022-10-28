import { useRouter } from 'next/router'
import React from 'react'

const ReviewId = () => {
    const route = useRouter()
    const { productId, reviewId } = route.query
    return (
        <div>Product number {productId} from Review is {reviewId}</div>
    )
}

export default ReviewId