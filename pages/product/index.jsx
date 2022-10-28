import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div className='Product'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link href='/'>Home</Link>
                        <h1>Products page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index