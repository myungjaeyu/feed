import React from 'react'

import TilesTemplate from './TilesTemplate'
import Tile from '../../molecules/Tile/Tile'

export default {
    title: 'TilesTemplate',
    component: TilesTemplate
}

export const DefaultTilesTemplate = () => (
    <div style={{ maxWidth: '900px', margin: 'auto' }}>

        <TilesTemplate>
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
            <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
        </TilesTemplate>

    </div>
)
