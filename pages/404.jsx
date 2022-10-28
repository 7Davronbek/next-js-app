import { useRouter } from 'next/router'
import React from 'react'

const PageNotFound = () => {
    const router = useRouter()
    const handleClick = () => {
      router.replace('/')
    }
    return (
        <div>
            <h1>PageNotFound</h1>
            <button onClick={handleClick}>Go home</button>
        </div>
    )
}

export default PageNotFound