import Head from 'next/head'
import Image from 'next/image'
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
        <>
        <Head>
            <title>{burger.name}</title>
            <meta title={burger.name} />
        </Head>
            <div className='BurgerId py-5'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <Image src={burger.image} width={400} height={400} alt={burger.name} />
                        </div>
                        <div className="col-lg-5">
                            <div className="cards">
                                <h3>{burger.name}</h3>
                                <p>{burger.descr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerId