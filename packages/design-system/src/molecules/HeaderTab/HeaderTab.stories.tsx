import React from 'react'

import HeaderTab from './HeaderTab'

export default {
    title: 'HeaderTab',
    component: HeaderTab
}

export const DefaultHeaderTab = () => 
    <HeaderTab 
        tabs={[
            <button className={'selected'}>상품</button>,
            <button>랭킹</button>
        ]} 
    />