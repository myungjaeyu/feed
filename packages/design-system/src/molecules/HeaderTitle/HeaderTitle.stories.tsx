import React from 'react'

import HeaderTitle from './HeaderTitle'

export default {
    title: 'HeaderTitle',
    component: HeaderTitle
}

export const DefaultHeaderTitle = () => 
    <HeaderTitle 
        title='오늘 뭐입지?' 
        description='18. 11. 28. 13:00' 
    />
