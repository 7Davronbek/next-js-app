import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

const index = () => {
    return (
        <>
        <Head>
            <title>Burger King</title>
            <meta name='title' content='Burger King ' />
        </Head>
            <Header />
        </>
    )
}

export default index