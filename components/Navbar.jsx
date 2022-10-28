import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <h3>Logo</h3>
          </div>
          <div className="col-lg-5 ms-auto d-flex align-items-center justify-content-between">
            <Link href='/'>Home</Link>
            <Link href='/burgers'>Burgers</Link>
            <Link href='/users'>Users</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar