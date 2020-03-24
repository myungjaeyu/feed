import React from 'react'

import Tile from './Tile'

export default {
    title: 'Tile',
    component: Tile
}

export const DefaultTile = () => (
    <div style={{ maxWidth: '300px' }}>
        <Tile image='https://usercontents-c.styleshare.kr/images/41316547/original' price='15,000원' />
    </div>
)
