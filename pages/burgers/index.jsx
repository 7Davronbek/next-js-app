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
    console.log(burgers);
    return (
        <div className='Burgers'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burgers