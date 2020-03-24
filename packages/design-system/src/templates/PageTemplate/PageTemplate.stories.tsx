import React from 'react'

import HeaderTitle from '../../molecules/HeaderTitle/HeaderTitle'
import HeaderTab from '../../molecules/HeaderTab/HeaderTab'

import PageTemplate from './PageTemplate'

export default {
    title: 'PageTemplate',
    component: PageTemplate
}

export const DefaultPageTemplate = () => (
    <PageTemplate
        HeaderTitle={<HeaderTitle title='오늘 뭐입지?' description='18. 11. 28. 13:00' />}
        HeaderTab={<HeaderTab tabs={[<button className={'selected'}>상품</button>, <button>랭킹</button>]} />}
    >
        PageContent
    </PageTemplate>
)
