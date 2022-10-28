import Image from 'next/image'
import React from 'react'
import { API_PATH } from '../../tools/constants'

export const getStaticProps = async () => {
    const res = await fetch(API_PATH + '/items')
    const data = await res.json()

    return {
        props: {
            burgers: data
        },
    }
}

const Burgers = ({ burgers }) => {
    return (
        <div className='Burgers'>
            <div className="container">
                <div className="row">
                    {burgers && burgers.map((item, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="cards">
                                <Image src={item.image} width={300} height={300} alt={item.name} />
                                <h5 className='py-3'>{item.name}</h5>
                                <button className="btn btn-outline-dark d-flex ms-auto">{item.price}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Burgers