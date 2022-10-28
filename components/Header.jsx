import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h3 className='text-center py-3'>Main Page</h3>
                        <div className="image text-center py-5">
                            <Image src='/images/1.png' width={200} height={200} alt='Next JS project' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header