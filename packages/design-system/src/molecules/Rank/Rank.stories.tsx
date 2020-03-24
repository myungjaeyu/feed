import React from 'react'

import Rank from './Rank'

export default {
    title: 'Rank',
    component: Rank
}

export const DefaultRank = () => (
    <Rank rank={5} title='소녀나라' description='10대, 캐주얼' />
)
