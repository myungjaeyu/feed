import React, { Fragment } from 'react'

import { HeaderTitle, HeaderTab, PageTemplate } from 'design-system'

interface ILayoutProps {
    children: any
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <Fragment>
            <PageTemplate
                HeaderTitle={<HeaderTitle title='오늘 뭐입지?' description='18. 11. 28. 13:00' />}
                HeaderTab={<HeaderTab tabs={[<button className={'selected'}>상품</button>, <button>랭킹</button>]} />}
            >
                {children}
            </PageTemplate>
        </Fragment>
    )
}

export default Layout
