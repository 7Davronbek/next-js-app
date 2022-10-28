import React from 'react'
import { useRouter } from 'next/router'

const FirstBlog = () => {
  const router = useRouter()
  const handleClick = () => {
    router.replace('/')
  }
  return (
    <div>FirstBlog <button onClick={handleClick}>Go home</button></div>
  )
}

export default FirstBlog