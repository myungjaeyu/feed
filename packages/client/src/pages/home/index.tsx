import React from 'react'
import { useMount } from 'react-use'

import AppContainer from '@containers/app'

import Layout from '@components/Layout'

import { Tile, TilesTemplate } from 'design-system'

import Link from '@components/Link'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {

    const app = AppContainer.useContainer()

    useMount( async () => {

        await app.getProductsAsync()
    })

    return (
        <Layout>

            <TilesTemplate>

                {
                    app.products.map((product, i) =>
                        <Link key={i} href={ product.url } target='_blank'>
                            <Tile image={ product.image.url } price={ `${ product.price }원` } />
                        </Link>
                    )
                }

            </TilesTemplate>

        </Layout>
    )
}

export default Home
