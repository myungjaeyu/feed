import React from 'react'
import { useMount } from 'react-use'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import AppContainer from '@containers/app'

import Layout from '@components/Layout'

import { Loader, Rank, ListTemplate } from 'design-system'

import Link from '@components/Link'

interface IRankProps {}

const Ranking = ({}: IRankProps) => {

    const app = AppContainer.useContainer()

    useMount( async () => {

        await app.getRanksAsync()
    })

    useBottomScrollListener( async () => {

        await app.addRanksAsync()
    })

    return (
        <Layout>

            <ListTemplate>

                {
                    app.ranks.map((rank, i) =>
                        <Link key={i} href={ rank.url } target='_blank'>
                            <Rank rank={i+1} image={ rank.image.url } title={ rank.name } description={ rank.description } />
                        </Link>
                    )
                }

            </ListTemplate>
            
            { app.pending && <Loader /> }

        </Layout>
    )
}

export default Ranking