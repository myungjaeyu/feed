import React from 'react'

import Rank from '../../molecules/Rank/Rank'

import ListTemplate from './ListTemplate'

export default {
    title: 'ListTemplate',
    component: ListTemplate
}

export const DefaultListTemplate = () => (
    <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <ListTemplate>

            <Rank rank={1} title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={2} title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={3} title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={4} title='소녀나라' description='10대, 캐쥬얼' />

        </ListTemplate>
    </div>
)
