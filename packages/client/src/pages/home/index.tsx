import React from 'react'

import Layout from '@components/Layout'

import { Tile, TilesTemplate } from 'design-system'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {

    return (
        <Layout>

            <TilesTemplate>
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
                <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            </TilesTemplate>

        </Layout>
    )
}

export default Home
