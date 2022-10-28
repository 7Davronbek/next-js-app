import React from 'react'
import { API_PATH } from '../../tools/constants'

export const getStaticPaths = async () => {
    const res = await fetch(API_PATH + '/items')
    const data = await res.json()

    const paths = data.map(burger => {
        return {
            params: { id: burger.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async context => {
    const id = context.params.id

    const res = await fetch(API_PATH + `/items/${id}`)
    const data = await res.json()

    return {
        props: {
            burger: data
        },
    }

}

const BurgerId = ({ burger }) => {
    console.log(burger);
    return (
        <div className='BurgerId'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        burger
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerId