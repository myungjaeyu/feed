import React from 'react'

import Layout from '@components/Layout'

import { Rank, ListTemplate } from 'design-system'

interface IRankProps {}

const Ranking = ({}: IRankProps) => {

    return (
        <Layout>

            <ListTemplate>

                <Rank rank={1} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={2} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={3} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={4} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={5} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={6} title='소녀나라' description='10대, 캐쥬얼' />
                <Rank rank={7} title='소녀나라' description='10대, 캐쥬얼' />

            </ListTemplate>

        </Layout>
    )
}

export default Ranking