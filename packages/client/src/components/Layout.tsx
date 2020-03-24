import React, { Fragment } from 'react'
import { useLocation } from 'react-use'

import { HeaderTitle, HeaderTab, PageTemplate } from 'design-system'

import Link from '@components/Link'

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
                        <Link to='/'><button key={'1'} className={ attachSelectedClassName(isSelectedTab('/')) }>상품</button></Link>, 
                        <Link to='/ranking'><button key={'2'} className={ attachSelectedClassName(isSelectedTab('/ranking')) }>랭킹</button></Link>
                    ]} 
                />}
            >
                {children}
            </PageTemplate>
        </Fragment>
    )
}

export default Layout
