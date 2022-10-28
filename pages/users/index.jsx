import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

const Users = ({ user }) => {
    return (
        <>
            <Head>
                <title>Users data</title>
                <meta name='title' content='users data' />
            </Head>
            <div className='Users'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>USERS</h2>
                        </div>

                        {!!user && user.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>{item.title}</h6>
                                            <p>{item.body.slice(0,80)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const user = await res.json()

    
    return {
        props: {
            user,
        },
    }
}


export default Users
