import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <h1>Home page</h1>

      <h4><Link href='/product'>Products</Link></h4>
    </>
  )
}

export default index