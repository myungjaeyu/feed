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

            <Rank rank={1} image='https://usercontents-c.styleshare.kr/images/34571457/original' title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={2} image='https://usercontents-c.styleshare.kr/images/34571457/original' title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={3} image='https://usercontents-c.styleshare.kr/images/34571457/original' title='소녀나라' description='10대, 캐쥬얼' />
            <Rank rank={4} image='https://usercontents-c.styleshare.kr/images/34571457/original' title='소녀나라' description='10대, 캐쥬얼' />

        </ListTemplate>
    </div>
)
