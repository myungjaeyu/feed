import React, { Fragment } from 'react'

import Layout from '@components/Layout'

import { Button } from 'design-system'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {

    return (
        <Layout>

            <Fragment>
                <Button onClick={ () => console.log('button module') }>Test</Button>

                <h1>Home</h1>

            </Fragment>
        </Layout>
    )
}

export default Home
