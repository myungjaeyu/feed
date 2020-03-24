import React from 'react'
import { useMount } from 'react-use'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import AppContainer from '@containers/app'

import Layout from '@components/Layout'

import { Loader, Tile, TilesTemplate } from 'design-system'

import Link from '@components/Link'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {

    const app = AppContainer.useContainer()

    useMount( async () => {

        await app.getProductsAsync()
    })

    useBottomScrollListener( async () => {

        await app.addProductsAsync()
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

            { app.pending && <Loader /> }

        </Layout>
    )
}

export default Home
