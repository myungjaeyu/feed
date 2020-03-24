import React, { Fragment } from 'react'
import { useLocation } from 'react-use'

import { HeaderTitle, HeaderTab, PageTemplate } from 'design-system'

interface ILayoutProps {
    children: any
}

const Layout = ({ children }: ILayoutProps) => {

    const location = useLocation()
    const isSelectedTab = pathname => location.pathname === pathname
    const attachSelectedClassName = bool => bool && 'selected' || ''

    return (
        <Fragment>
            <PageTemplate
                HeaderTitle={<HeaderTitle title='오늘 뭐입지?' description='18. 11. 28. 13:00' />}
                HeaderTab={<HeaderTab 
                    tabs={[
                        <button key={'1'} className={ attachSelectedClassName(isSelectedTab('/')) }>상품</button>, 
                        <button key={'2'} className={ attachSelectedClassName(isSelectedTab('/ranking')) }>랭킹</button>
                    ]} 
                />}
            >
                {children}
            </PageTemplate>
        </Fragment>
    )
}

export default Layout
