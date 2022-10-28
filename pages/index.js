import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Home page</h1>
                            <h4><Link href='/product'>Products</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index